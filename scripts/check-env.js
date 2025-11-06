// scripts/check-env.js
const fs = require('fs');
const path = require('path');

// Files to check for accidental env exposure
const filesToCheck = [
  './src/app/page.tsx',
  './src/lib/google-sheets.ts',
  './next.config.ts',
  './src/app/layout.tsx',
  './src/components/homepage/Hero.tsx',
  './src/components/homepage/HeroBackground.tsx',
  './src/components/shared/WhatsAppFloat.tsx',
  './src/components/shared/MobileMenu.tsx'
];

// ACTUAL sensitive patterns to look for (not normal code)
const sensitivePatterns = [
  // Actual private key patterns (not just the env variable name)
  /-----BEGIN PRIVATE KEY-----[\s\S]*?-----END PRIVATE KEY-----/,
  // Complete service account email (not partial matches)
  /radikal-website@radikal-website\.iam\.gserviceaccount\.com/,
  // Complete Google Sheet ID
  /1qJH28Mrx9tMdLGCUXvXogJASYX0u4VOCR6I0gt-4FRY/,
  // Actual private key data (not env variable names)
  /MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC\+9LTQA/,
];

// FALSE POSITIVE patterns we should IGNORE (normal code)
const falsePositivePatterns = [
  'process.env.GOOGLE_PRIVATE_KEY', // This is just accessing env vars - NORMAL!
  'process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL', // This is normal code!
  'process.env.GOOGLE_SHEET_ID', // This is normal code!
  'GOOGLE_PRIVATE_KEY', // Just the env var name
  'GOOGLE_SERVICE_ACCOUNT_EMAIL', // Just the env var name  
  'GOOGLE_SHEET_ID', // Just the env var name
];

let hasErrors = false;
let filesChecked = 0;

console.log('🔍 Scanning for ACTUAL exposed secrets (ignoring normal code patterns)...\n');

filesToCheck.forEach(file => {
  if (fs.existsSync(file)) {
    filesChecked++;
    const content = fs.readFileSync(file, 'utf8');
    let fileHasRealIssues = false;
    const issues = [];

    // Check for ACTUAL sensitive data (not false positives)
    sensitivePatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          // Only show first 50 chars of the match to avoid printing full keys
          const preview = match.length > 50 ? match.substring(0, 50) + '...' : match;
          issues.push(`  ❌ Found actual secret: "${preview}"`);
          fileHasRealIssues = true;
          hasErrors = true;
        });
      }
    });

    // Check for false positives to show as warnings (not errors)
    let hasFalsePositives = false;
    falsePositivePatterns.forEach(pattern => {
      if (content.includes(pattern)) {
        if (!hasFalsePositives) {
          issues.push(`  ⚠️  Note: Found normal code patterns (not secrets):`);
          hasFalsePositives = true;
        }
        issues.push(`    - "${pattern}" (this is normal environment variable access)`);
      }
    });

    if (fileHasRealIssues) {
      console.log(`📄 ${file}:`);
      issues.forEach(issue => console.log(issue));
      console.log('');
    } else if (hasFalsePositives) {
      console.log(`📄 ${file}: ✅ No real secrets found (only normal env var access)`);
      issues.forEach(issue => console.log(issue));
      console.log('');
    }
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});

console.log(`📊 Scanned ${filesChecked} files`);

if (hasErrors) {
  console.log('\n🚨 CRITICAL SECURITY ISSUES FOUND!');
  console.log('❌ Remove ACTUAL hardcoded secrets (private keys, emails, etc.) before deployment!');
  process.exit(1);
} else {
  console.log('\n✅ No actual hardcoded secrets found!');
  console.log('🎉 Your code is ready for secure deployment.');
  console.log('\n💡 Note: Environment variable access (process.env.XXX) is normal and expected.');
}