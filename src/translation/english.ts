import { Platform } from "react-native";

export const english = {
  shared: {
    cta_continue: "Continue",
    cta_skip_tutorial: "Skip tutorial",
    connect_with: "Connect with {{socialMedia}}",
    statistics: "Statistics",
    terms_and_conditions: "Terms and Conditions",
    privacy_policy: "Privacy Policy",
    //TUTORIAL STEPS
    actions_scroll_down: "Scroll Down",
    actions_scroll_up: "Scroll Up",
    actions_like: "Like",
    actions_play: "Play",
    actions_swipe: "Swipe",
    suprised_message:
      "Look surprised to scroll down\nTip: open your mouth and lift your eyebrows",
    disgusted_message:
      "Look disgusted to scroll up\nTip: stick out the tip of your tongue and frown as if you smell something strange",
    smile_message:
      "Smile to like\nTip: showing your teeth helps with the smile detection.",
    sad_message:
      "Put on a sad face to Play\nTip: lift your eyebrows a bit while you do this gesture.",
    angry_message:
      "Put on an angry face to swipe\nTip: frown and show your teeth hard",
    scroll_down_success: "Excellent!",
    scroll_up_success: "Great!",
    like_success: "Good job!",
    play_success: "Awesome!",
    swipe_success: "Amazing!",
    loading: "Loading",
    english: "English",
    portuguese: "Portuguese",
    spanish: "Spanish",
  },
  language: {
    title: "Select your preferred language",
    subtitle:
      "Once you are in the app you can change your language choice in SETTINGS",
  },
  home: {
    welcome_title: "Welcome to\nScrolling Therapy",
    subtitle:
      "Login to your favorite social network and turn your screen time into exercises for Parkinson’s symptoms.",
  },
  tutorial_start: {
    title: "Let’s get started",
    subtitle:
      "There are 5 facial expressions you will need to practice to successfully browse through your social media. Make sure you are in a place with good lighting with no objects or people in the background. Let’s try them!",
    cta_next: "Next",
  },
  tutorial: {
    cannot_skip_message:
      "Please, complete the tutorial to learn the exercises that will help with your physical therapy.",
    //TUTORIAL MESSAGE
    initial_message:
      "Now position your face inside the frame and let's start the tutorial.",
    repeat_message:
      "Please, repeat this gesture 3 times to confirm you got it.",
    //RESTART POP-UP
    try_again_title: "Try again?",
    try_again_description:
      "We weren't able to detect any gestures. Would you like to try the tutorial again?",
    try_again_yes_cta: "Yes",
    try_again_no_cta: "No",
    //NO FACE DETECTED POP-UP
    no_face_detection_title: "No face detected",
    no_face_detection_description: "Please position your face inside the frame",
  },
  tutorial_completed: {
    title: "Well done!",
    subtitle:
      "Now you just need to login to your social networks and start browsing.",
    checkbox_prefix: "I accept the ",
    checkbox_disclaimer:
      "I accept the following disclaimer: The Scrolling Therapy app is intended for general wellness use only and does not provide any clinical or healthcare advice or guidance, nor is intended directly or indirectly for the prevention, diagnosis, treatment or rehabilitation of any disease, state or condition. The contents of Scrolling Therapy, such as text, videos, graphics, images are for informational purposes only, and have not been evaluated by the U.S. Food and Drug Administration or any other regulatory agency. The content is not intended to be a substitute for professional medical advice, prevention, diagnosis, or treatment or rehabilitation or to cure or prevent any medical condition. Do not attempt to self-diagnose and always seek the advice of your treating physician or other qualified health provider with any questions you may have regarding any medical condition. Reliance on any information provided herein is solely at your own risk.",
    and: " and ",
  },
  social: {
    face_detection: "Face detection",
    align_camera:
      "Please, align your face with the camera by moving it to the left/right.",
    congrats: "Congratulations!",
    exercise_completed_title:
      "You finished your practice for today. But you can go on...There is not such a thing as too much exercise.",
    //FACEBOOK FEED
    new_award_title: "New award!",
    new_award_description:
      "You have reached {{count}} minute of practice. Check your statistics to know more about your performance.",
    new_award_description_plural:
      "You have reached {{count}} minutes of practice. Check your statistics to know more about your performance.",
    cta_new_award: "GO TO STATS",
  },
  menu: {
    connect_with_facebook: "Connect with Facebook",
    title: "Menu",
    switch_accounts: "Switch accounts",
    //MENU ITEMS
    dashboard: "User info",
    tutorial: "Tutorials",
    statistics: "Stats",
    settings: "Settings",
    how_it_works: "How it works",
    logout: "Logout",
  },
  dashboard: {
    section_welcome: "Welcome to your dashboard",
    explore: "Let’s explore your social media together",
    about_title: "About Scrolling Therapy",
    about_description:
      Platform.OS === "ios"
        ? "Scrolling Therapy is a mobile application that allows people that have been diagnosed with Parkinson’s Disease to perform facial exercises while scrolling their social media. Scrolling Therapy is not - and it is never intended to be - a cure for Parkinson’s Disease and it doesn’t replace any other treatment for it. If you have any doubts about its effect, please refer to your doctor."
        : "Scrolling Therapy is a mobile application that helps people that have been diagnosed with Parkinson’s Disease to perform facial exercises, that are suggested as part of their daily physical treatment, by using face recognition technology to allow them to use face gestures to browse their social media feeds. \nScrolling Therapy is not - and it will never intend to be- a cure for Parkinson’s Disease and it doesn’t replace any other treatments for it. \n If you have any doubts about its effect, please refer to your doctor.",
  },
  stats: {
    weekly: "Weekly",
    no_data: "You don't have enough data to show",
    minute: "{{count}} minute",
    minute_plural: "{{count}} minutes",
    second: "{{count}} second",
    second_plural: "{{count}} seconds",
    average_time: "Average daily usage",
    most_used_actions: "Most used interactions",
    chart_time_middle_label: "Min",
    //WEEK CONSTANTS
    sunday: "S",
    monday: "M",
    tuesday: "T",
    wednesday: "W",
    thursday: "T",
    friday: "F",
    saturday: "S",
  },
  settings: {
    title: "Settings",
    front_camera_view: "Front Camera View",
    language: "Language",
  },
  terms_and_conditions: {
    title: "Terms of Use",
    date: "Date of last update: 3/28/2023",
    paragraph:
      'Welcome to Eurofarma\'s Scrolling Therapy application ("Application"). This Application is controlled and operated by Eurofarma Laboratórios S.A. ("Eurofarma"), company headquartered at Rodovia Presidente Castelo Branco, 3565, Quadra GL/Lote A – Ingahi / Itapevi - SP, CEP 06696-000, enrolled with CNPJ/MF (Corporate Taxpayer registration) under no. 61.190.096/0001-92.\n\nPlease read carefully the terms and conditions stipulated below ("Terms of Use") so that you can enjoy our Application and all the services made available through it.\n',
    bold_paragraph:
      "If you do not agree with any provisions of the Terms of Use, do not access or use our Application. Your access and use represents your full and unconditional acceptance of the Terms of Use. The Application's Privacy Policy forms part of these Terms of Use.",
    last_paragraph:
      'For the purposes of these Terms of Use, "Users" are all registered or unregistered individuals who in any way interact with, access or use the Application.',
    topics: [
      {
        title: "Purpose of the Application",
        description:
          "Eurofarma has developed and maintains this Application to support the treatment of patients diagnosed with Parkinson's Disease. This Application is intended for the general public.\n\nIf you have a health problem, you should consult your doctor or a health professional.",
      },
      {
        title: "Your Participation in the Application",
        description:
          "Access to the Application is offered free of charge and can be done from any device with access to the world wide web.\n\nYou may freely use the Application as well as download content available on the Application, provided that such use is for non-commercial purposes. You may not distribute, modify, transmit, reuse, republish or use any content for commercial purposes without the express written consent of Eurofarma.\n\nAll copyright and intellectual property notices contained in the copied content must be retained and preserved. The copyright of all Application content belongs to Eurofarma, its affiliates or suppliers, unless otherwise informed in the Application.\n\nThe images of people or places made available in the Application are owned by or duly licensed to Eurofarma. The use of these images by any User is strictly prohibited. The improper use of images may infringe the rights of Eurofarma and third parties.\n\nThe application connects with the device's camera to capture the user's facial expressions. This allows the user to control their browsing experience using specific facial cues that instruct the app to scroll, like, share, and more. The app is built on the open- source TensorFlow AI platform, developed by Google, ensuring a robust and reliable foundation for the technology.",
      },
      {
        title: "User Registration",
        description:
          "The application does not have user registration, the login functionality through Instagram and Facebook does not store the user's personal information.",
      },
      {
        title: "Obligations and Restrictions",
        description:
          "Users are prohibited from:\n\n(i) committing fraud or encouraging the practice of illicit conduct;\n\n(ii) disseminating or attempting to deliver computer viruses, including but not limited to trojan horses, worms, keyboard loggers, time bombs, spyware, adware, cancelbots or any other invasive or malicious code or program;\n\n(iii) disseminating or attempting to send spam or any other material that may modify, interrupt or interfere with the functioning, operation or maintenance of the Application, the communication networks, or, in any way, impair the use and quality offered;\n\n(iv) using the Application for commercial purposes;\n\n(v) removing, hiding or damaging any note, banner or distinctive sign or mark from the Application;\n\n(vi) using anonymous tools or proxy for the purpose of anonymizing their IP address;\n\n(vii) interfering with or breaking any of the Application's security systems, especially those for the purpose of limiting and controlling access to and use of the Application and its contents;\n\n(viii) requesting login and/or access information for an account belonging to another User;\n\nThe User acknowledges and agrees that all information and content made available on the Application by Eurofarma is owned by or has been duly licensed to Eurofarma and, therefore, cannot be made available to third parties.\n\nUnless otherwise provided for in these Terms of Use, the User agrees not to reproduce, duplicate, copy, sell, resell or exploit any part of the information and content of the Application, as well as undertakes to use all the content of the Application in a lawful manner, with reproduction, distribution, transformation, commercialization or modification of the content being forbidden, without the prior and express authorization of Eurofarma, and the supply of login and password to non-registered third parties is also forbidden.",
      },
      {
        title: "Third Party Links",
        description:
          "The Application may provide links to other Internet applications or other resources, including links to medical publications, public health agencies and medical societies. Thus, these links will be made available as a convenience to the User and, since Eurofarma has no control over such applications or external resources, the User acknowledges and agrees that Eurofarma is not responsible for their availability and does not endorse or is responsible for any content, advertising, products, services or other materials contained in or made available through such applications or resources. In this sense, we suggest that the user is informed about the policy of third-party applications before accessing them or providing any type of information.\n\nEurofarma may store information about accesses to said third-party links.",
      },
      {
        title: "Intellectual Property",
        description:
          "The copyright of all content posted by Eurofarma, by users and third parties belong to their respective holders, unless otherwise informed.\n\nAll intellectual property rights relating to this Application are reserved by Eurofarma. All brands presented in this Application are the property of Eurofarma, its affiliated companies or have been duly licensed to Eurofarma.\n\nNo provision will be interpreted as granting users any right, title or interest in any of Eurofarma's intellectual property and trademarks.",
      },
      {
        title: "Limitation of Liability",
        description:
          "THE USE OF THIS WEBSITE BY THE USER IS AT THEIR OWN RISK. UNDER NO CIRCUMSTANCES WILL EUROFARMA OR ANY OTHER PARTY INVOLVED IN THE CREATION, PRODUCTION AND DISSEMINATION OF THE WEBSITE BE LIABLE FOR ANY DAMAGES (INCLUDING, BUT NOT LIMITED TO, DAMAGES OF ANY NATURE, LOST PROFITS AND CONSEQUENTIAL DAMAGES) ARISING FROM THEIR ACCESS AND USE, OR INABILITY TO ACCESS AND USE THE WEBSITE.\n\nEUROFARMA DOES NOT PROVIDE ANY GUARANTEE REGARDING THE FILES AVAILABLE FOR DOWNLOAD. WITHOUT LIMITATION, ALL CONTENT AND FUNCTIONALITIES ON THE WEBSITE ARE PROVIDED \"AS IS\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE.\n\nEUROFARMA DOES NOT GUARANTEE THAT THE WEBSITE WILL BE AVAILABLE UNINTERRUPTED OR FREE OF ANY ERRORS OR FAILURES AND NEITHER GUARANTEES THE IMPOSSIBILITY OF ITS SYSTEM AND SERVERS BEING ATTACKED, INVADED, MODIFIED OR DAMAGED, IN ANY WAY, BY THIRD PARTIES.\n\nEUROFARMA IS NOT AND WILL NOT BE RESPONSIBLE (I) FOR THE QUALITY OR AVAILABILITY OF THE CONNECTION OF THE USER'S DEVICE TO THE INTERNET IN ANY CIRCUMSTANCES, (II) FOR THE IMPOSSIBILITY OF USE OF ANY INFORMATION OR SERVICES AVAILABLE DUE TO THE INCOMPATIBILITY OF THE TECHNICAL CONFIGURATION OF THE CONNECTION DEVICE OF USERS, (III) FOR OTHER USERS' DISOBEDIENCE TO THE TERMS OF USE ESTABLISHED HEREIN, (IV) FOR ANY DAMAGES SUFFERED BY USERS DUE TO THE USE OF THE WEBSITE, AND (V) FOR REPAIR FOR DAMAGES OF ANY KIND CAUSED BY BREACH OF PRIVACY OR SECURITY OF USER DATA DURING THE CONNECTION OF THEIR DEVICE TO THE INTERNET THROUGH THIRD PARTIES.\n\nEurofarma reminds Users of this Application that it is their sole responsibility to keep their computer environment safe, using available tools such as antivirus and firewall, among others, in order to contribute to the prevention of electronic risks.\n\nTHEREFORE, EUROFARMA WILL NOT BE RESPONSIBLE FOR DAMAGES OR VIRUSES THAT MAY INFECT THE COMPUTER OR EQUIPMENT OR OTHER ASSETS ARISING FROM USER ACCESS TO THE WEBSITE OR FOR DOWNLOADING ANY MATERIALS, DATA, TEXTS, IMAGES, VIDEOS OR AUDIO MADE AVAILABLE ON THE WEBSITE.\n\nThe User acknowledges and agrees that Eurofarma will have the right to suspend the User's access to the Platform at any time and without prior notice, including, as prudent or technical measures or as a result of any inspection activity carried out, if it determines that the User's obligations provided for in these Terms are not being met or in case of relevant technical problems that affect the Application's performance.",
      },
      {
        title: "Infractions",
        description:
          "The User who violates these Terms of Use and/or the Privacy Policy will be liable for damages of any nature that Eurofarma may suffer or those caused to third parties, without limitation.\n\nIn the event that any User considers that the Application is being used improperly, the User must send a communication to the Application's administration, via the email address euroatende@eurofarma.com.br, providing the following data: (i) personal data: complainant's name, address, telephone number and e-mail address; (ii) specification of the alleged irregular activity that occurred on the Application, including, without limitation, the description of the facts or circumstances that reveal the irregular nature of such activity; (iii) accurate identification of where the violation can be found on the Application (with respective URL); and (iv) express, clear statement and under the complainant's responsibility that the information contained in the communication is correct and accurate.\n\nOnce such communication is received, Eurofarma, at its sole discretion and without the need for notification, reserves the right to remove the allegedly infringing content from the Application or to exclude the infringing Users.",
      },
      {
        title: "Changes to the Terms",
        description:
          "Eurofarma reserves the right, at any time and at its sole discretion, to modify, alter or otherwise update these Terms of Use. In case of modification, Eurofarma will make a notice available in the Application and the new terms of use will take effect immediately. If not in agreement with the amended terms, the User must stop accessing the Application. Accessing and using the Application after the changes have been published represents full and unconditional acceptance of the new Terms of Use.\n\nThe availability of the Application has an indefinite duration and Eurofarma reserves the right to terminate, suspend or interrupt unilaterally and at any time, without the need for prior or subsequent notice, the availability of the Application, or its entire transformation and modification.\n\nAny doubts, criticisms, suggestions and/or complaints can be made via email.",
      },
    ],
    brazil: "Brazil",
    other_countries: "Other Latin American countries",
  },
  privacy_policy: {
    title: "PRIVACY POLICY",
    date: "Date of last update: 3/28/2023",
    intro:
      'Eurofarma Laboratórios S.A., company headquartered at Rodovia Presidente Castelo Branco, 3565, Quadra GL/Lote A – Ingahi / Itapevi - SP, CEP -000, enrolled with CNPJ/MF (Corporate Taxpayer Registration) under no. 61.190.096/0001-92, ( “Eurofarma”) is committed to respecting your privacy and has created this privacy policy ("Privacy Policy") to provide you with a clear understanding of how the Scrolling Therapy app ("Application") works, and how your personal data is handled. \n\nThis Privacy Policy presents, in a simple, objective and transparent manner, the practices adopted by Eurofarma regarding Application Users\' personal data processing. \n\n For the purposes of this Privacy Policy, does not collect personal data on the usage of Scrolling Therapy application.',
    topics: [
      {
        title: "What Personal Data We Collect",
        description_prefix:
          "There is no personally identifiable data stored on the cloud. The Facebook and Intragram logins are not stored by us at our servers. \n\nThe statistics are stored on our server by are linked to the user via an anonymous user ID. You cannot find connect the statistics to a specific individual Personal Data in several ways, including through the registration made by the User, the requests made in our service channels and the use of the Application. \n\nJust for the moment of faceApi.js recognizes the face expressions (around 200ms) and returns its feedback to the App not storaging personal information.",
        subtopics: [
          {
            title: "\n\n• Navigation information. ",
            text: " This is the information we collect from Users who browse the Application: IP address, information about the device used, date and time of access, date when the application was installed, preferred, among others.",
          },
          {
            title: "\n\n• Other information provided by Users. ",
            text: "Other information voluntarily provided by Users, such as in communications with Eurofarma through the Call Center.",
          },
        ],
      },
      {
        title: "How We Use Personal Data",
        description_prefix:
          "There is no identified user collection on the application, so Eurofarma uses Personal Data in annonimous way for the purposes described in this Privacy Policy and any other purposes previously informed to the data subject. \n\n(i) Diagnose and resolve any technical problems with the Application. \n(ii) Improve and develop a better experience for Users when using the Application. \n(iii) Comply with legal and regulatory obligations, including communicating adverse events or issues related to the safety and quality of our products to the competent authorities. \n(iv) Investigate and instruct any legal, administrative or arbitration proceedings and protect the rights and interests of Eurofarma, our affiliates or third parties. \n(v) Identify and make available information materials of interest to Users. \n(vi) Perform statistical analyzes on Users to improve and develop new products and services.",
      },
      {
        title: "Who May We Share Personal Data With",
        description_prefix:
          "Except as provided in this Privacy Policy, the Personal Anonymous Data collected will not be provided to third parties that are not Eurofarma partners, nor exposed to the public, sold or marketed. \n\n In some situations, we may operate together with other companies in various activities, including hosting data, analytics and market intelligence. Accordingly, we reserve the right to share your anonymous information, including Personal Data, only with the companies listed below. We will adopt, whenever possible, mechanisms for the anonymization of this data, in order to preserve your privacy as much as possible. \n\n In this sense, we may share your Personal Data with the following companies:",
        subtopics: [
          {
            title: "\n\n (i) Eurofarma Group companies: ",
            text: "We may transfer Data between Eurofarma's companies, inside or outside Brazil, in order to provide due service to our customers and consumers, in addition to ensuring compliance with Eurofarma's legal and regulatory obligations, especially when these are unique and/or integrated, among other reasons.",
          },
          {
            title: "\n(ii) Our suppliers: ",
            text: "We have a number of suppliers that we need to contract to operate our services, and some of them may process the Personal Data we collect. For example, companies that provide data hosting, customer service, registration authentication and validation services, advertising companies, among others. As far as possible, we seek to carefully evaluate our suppliers and enter into contractual obligations for information security and protection of Personal Data with them, looking to minimize risks for the Holders, but unfortunately we cannot guarantee the correct handling by third parties, which use, disclose and protect personal data in accordance with their respective privacy policies.",
          },
          {
            title: "\n(iii) Judicial, police or administrative authorities: ",
            text: "In Brazil or abroad, in compliance with a court order or legal or regulatory obligation.",
          },
          {
            title: "\n(iv) Third parties: ",
            text: "In connection with any reorganization, merger, sale, joint venture, assignment, transfer or other disposition of all or part of our business, assets or stock (including in bankruptcy or similar proceedings).",
          },
          {
            title: "\n(v) To safeguard and protect Eurofarma's rights: ",
            text: "We reserve the right to access, read, preserve and disclose data that we believe is necessary to comply with a legal obligation or court order; compliance with regulatory demands with Anvisa or other entities; protect the rights, property or safety of Eurofarma, our employees and customers.",
          },
        ],
        description_sufix:
          "\n\n Statistical reports created from aggregated data, which do not reveal the the holders' identity, may also be shared with third parties, such as Eurofarma's affiliates, subcontractors and/or commercial partners.",
      },
      {
        title: "How We Collect Personal Data",
        description_prefix:
          'We use certain technologies such as "cookies," "web beacons" and "IPs" to collect information on the Application. \n\nWhen browsing the Application or using any of its features or tools, a cookie may be sent to your device. A cookie is a piece of data that identifies you as a unique User, recognizing, tracking and storing your browsing information. The Application places cookies on your device containing a unique identifier used to better understand the use of the Application, enabling Eurofarma to identify which functionalities are preferred by Users (for example, based on the number of visits to these functionalities). \n\nWhen logging in the application through Facebook and Instagram, a cookie may be provided, which will be maintained by the Application, and will contain an annonimus identifier. This type of cookie is used to identify the User and provide access to areas of the Application that are limited to Users logged into the application. \n\nIn addition to cookies, we may use or authorize the use of other data collection and identification technologies, such as “beacons” (also known as “pixel tags” or “clear gifs”). Beacons serve to help manage and improve our services, systems, advertising and online ads and other tools. They are small blocks of code inserted into the Application that may collect information about your device, including, for example: device model, operating system, browser version, access time, IP address and other similar information. \n\nWe also collect your Internet Protocol (IP) address, a number automatically assigned to your device by your Internet connection provider whenever you connect to the Internet. Eurofarma may also use IP addresses to collect anonymous and aggregated information about the number of visitors and use of the Application.',
      },
      {
        title: "Communications",
        description_prefix:
          "Eurofarma does not request personal information by email. For this reason, Eurofarma is not responsible for any fraudulent electronic communications that collect your personal data (a technique commonly known as phishing).",
      },
      {
        title: "Rights of Personal Data Holders",
        description_prefix:
          "The data collected in the application is non-identified but you can request more information by email at privacidade@eurofarma.com.br \n\nWe try to respond to all legitimate requests within 10 business days. Occasionally it may take longer than 10 business days if your request is particularly complex or if you have made multiple requests. In this case, we will notify you and keep you updated on the progress of your request.",
      },
      {
        title: "Changes to This Privacy Policy",
        description_prefix:
          "This Privacy Policy may be changed at any time by Eurofarma, at its sole discretion. We recommend that it be reviewed from time to time. \n\nAll changes will be communicated through a prominent notice on the Application home screen or any other form of communication with Users.",
      },
      {
        title: "Contact Us",
        description_prefix:
          "In case of questions, comments, suggestions or complaints related to this Privacy Policy or Eurofarma's data protection practices, please contact us through our Service Channels available in the application.",
      },
    ],
  },
  help: {
    title: "How it Works",
    faq: [
      {
        question:
          "Does The Scrolling Therapy work with any social media network?",
        answer:
          "So far, The Scrolling Therapy works only with Facebook and Instagram.",
      },
      {
        question: "How do I connect to my social media?",
        answer:
          "Both, in the Welcome Screen and the User info section you will find the link to connect with Facebook and Instagram.",
      },
      {
        question:
          "What are the gestures that I can exercise with The Scrolling Therapy?",
        answer:
          "The expressions included so far are Smile, Disgusted, Angry, Surprise and Sad.",
      },
      {
        question: "How can I learn to use my face gestures to control the app?",
        answer:
          "Please go to the Tutorial and it will guide you through the process.",
      },
      {
        question: "What if the camera doesn’t detect my facial expressions?",
        answer:
          "The app will show a message in both the Tutorial and your social media feeds, if your gestures aren’t being detected.",
      },
      {
        question: "How do I know how much time I have spent exercising?",
        answer:
          Platform.OS === "ios"
            ? "Scrolling Therapy tracks the daily time that you spend browsing your social media feed with your facial expressions at the top of the app.\nThe detailed info about the gestures that you used and your weekly exercise time are shown in the Stats section."
            : "Scrolling Therapy tracks the time that you spend browsing your social media feed with your facial expressions and it will show you how close you are to your daily goal at the top of the app.\nOn the other hand, the detailed info about your goals and use of the app is shown in the Stats section.",
      },
      {
        question:
          "Does The Scrolling Therapy record what I do with the camera?",
        answer:
          "NO. The application only uses the camera in your cell phone when and if you grant access to it and only when you are exercising.",
      },
    ],
  },
  header: {
    daily_goal_achieved: "Congratulations!\nYou reached your daily goal",
    minute_to_go:
      Platform.OS === "ios" ? "1 more minute" : "1 minute for your daily goal",
    minute_to_go_plural:
      Platform.OS === "ios"
        ? "{{count}} more minutes"
        : "{{count}} minutes for your daily goal",
  },
};
