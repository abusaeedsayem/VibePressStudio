/* eslint-disable */
/**
 * Google Apps Script for VibePress Studio Form Processing
 * 
 * INSTRUCTIONS TO SET UP (Takes ~1 minute):
 * 1. Open Google Sheets (https://sheets.new) and create a new spreadsheet (e.g., "VibePress Submissions").
 * 2. In Google Sheets menu, click: Extensions > Apps Script.
 * 3. Delete any code in the editor and paste THIS ENTIRE FILE.
 * 4. (Optional) Customize the NOTIFICATION_EMAIL below if needed (default: vibepress.studio@proton.me).
 * 5. Click "Deploy" (top right) > "New deployment".
 * 6. Under "Select type" (gear icon), select "Web app".
 * 7. Set:
 *    - Description: "VibePress Form Receiver"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Required for web form submissions)
 * 8. Click "Deploy", authorize permissions when prompted, and copy the Web App URL (starts with https://script.google.com/macros/s/...).
 * 9. Set this URL as GOOGLE_SHEETS_WEBHOOK_URL in your Vercel Environment Variables or .env.local file.
 */

const NOTIFICATION_EMAIL = "vibepress.studio@proton.me";

function doPost(e) {
  try {
    const rawData = e.postData.contents;
    const data = JSON.parse(rawData);
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Form Type",
        "Name",
        "Email",
        "Product / Interest",
        "Category",
        "License Reference",
        "Message / Details"
      ]);
      // Style headers
      const headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#f3f4f6");
    }
    
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "UTC" }) + " UTC";
    const formType = data.formType || (data.type === "lab" ? "Lab Pre-Launch Registration" : "Contact Support");
    const name = data.name || data.fullName || "N/A";
    const email = data.email || "";
    const product = data.product || data.selectedProduct || "N/A";
    const category = data.category || "N/A";
    const license = data.license || "N/A";
    const message = data.message || "N/A";
    
    // Append row to sheet
    sheet.appendRow([
      timestamp,
      formType,
      name,
      email,
      product,
      category,
      license,
      message
    ]);
    
    // Send email notification to vibepress.studio@proton.me
    if (NOTIFICATION_EMAIL) {
      let subject = `[${formType}] New Submission from ${name || email}`;
      let body = `Hello VibePress Studio Team,\n\nYou have received a new submission:\n\n` +
        `• Form: ${formType}\n` +
        `• Name: ${name}\n` +
        `• Email: ${email}\n` +
        `• Product: ${product}\n`;
        
      if (category !== "N/A") body += `• Category: ${category}\n`;
      if (license !== "N/A") body += `• License / Reference: ${license}\n`;
      if (message !== "N/A") body += `• Message:\n${message}\n`;
      
      body += `\nSubmitted At: ${timestamp}\nSaved to Google Sheet: ${SpreadsheetApp.getActiveSpreadsheet().getName()}`;
      
      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: subject,
        body: body,
        replyTo: email || NOTIFICATION_EMAIL
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "success", 
      message: "Submission recorded and email sent." 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ 
    status: "active", 
    message: "VibePress Google Sheets Webhook is online." 
  })).setMimeType(ContentService.MimeType.JSON);
}
