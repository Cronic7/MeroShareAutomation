
# MeroShare Cypress Automation
## Overview 🤖
MeroShare Cypress is a GitHub repository for automating tasks related to MeroShare, a platform used for managing shares in Nepal. This automation script is specifically designed to scrape IPO (Initial Public Offering) results from MeroShare and send email notifications to the user.

### Features 🚀
IPO Results Scraping: Automates the process of scraping IPO results from MeroShare.
Email Notification: Sends email notifications to the user with the scraped IPO results.
GitHub Actions Workflow: Utilizes GitHub Actions to automate the script execution triggered on a manual dispatch.
Usage ⚙️
To use this automation script, follow these steps:

### Clone the Repository:

Fork and clone the repository to your GitHub account.
Make the Repository Private:

After cloning the repository, go to the repository settings on GitHub.
Under the "Danger Zone," find the "Change repository visibility" option.
Change the visibility to "Private" and confirm.

### Add GitHub Secrets:


    TO USE self.yml
    ME_DP: ENTER YOUR BANK DP (EXAMPLE 16100)
    ME_USERNAME: ENTER YOUR USERNAME (EXAMPLE 147308)
    ME_PASSWORD: ENTER YOUR MEROSHARE PASSWORD (EXAMPLE PASSWORD)
    EMAIL_USER: Your email address .
    EMAIL_PASSWORD: Your email password.(USE APP PASSWORD)



Generate App Password for Gmail:

If you're using a Gmail account for email notifications, generate an App Password for enhanced security. Instructions can be found here.

### Run Workflow:

Navigate to the "Actions" tab in your GitHub repository.
Click on "Run workflow" and select the desired workflow (e.g., "main.yml").
### Monitor Workflow Execution:

Review the workflow logs to ensure successful automation.
## Disclaimer ⚠️
This script is intended for educational purposes and should be used responsibly. The developers are not responsible for any misuse or unintended consequences.

## Contribution 🤝
Feel free to contribute to the project by creating issues, suggesting improvements, or submitting pull requests.

Happy automating! 🎉
# Created with ❤ by cronic7 🤖🚀
