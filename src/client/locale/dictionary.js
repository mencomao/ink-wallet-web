export const dictionary = {
  en: {
    header: {
      loginBtnLabel: "Login",
      logoutBtnLabel: "Logout"
    },
    main: {
      createWalletBtnLabel: "Create New Wallet",
      restoreWalletBtnLabel: "Restore My Wallet"
    },
    mainPage: {
      sendBtn: "Send",
      importMoreBtn: "Import more",
      receiveBtn: "Receive",
      recentTitle: "Recent"
    },
    securityCenter: {
      pageHeading: "PLEASE DON'T TOUCH ANYTHING UNLESS YOU REALLY UNDERSTAND WHAT YOU ARE DOING",
      panelHeading: "Backup",
      panelSubHeading: "Input your password to backup",
      displayBtn: "Display mnemonics",
      downloadBackupBtn: "Download wallet file",
      firstDescription: "You can get the backup of your mnemonics or wallet file here. It just like COPY YOU WALLET FILE, or TRANSCRIBE YOUR MNEMONICS.",
      secondDescription: "Each backup is COMPLETELY SAME with the one you use to restore your wallet, and can be used to make your asset avaliable INDEPENDENTLY.",
      thirdDescription: "You SHOULD NEVER share any backup with others. You should only backup for YOURSELF, and only on reliable devices, in safe situation.",
      forthDescription: "MAKE SURE you know what you are doing before action.",
      errorModal: {
        title: "Password is incorrect",
        doneBtn: "Done"
      },
      mnemonicsModal: {
        title: "Your mnemonics is",
        firstDescription: "Make sure you have saved your wallet file and mnemonics properly, or you will lose this wallet FOREVER.",
        secondDescription: "We strongly suggest you write down this words in a paper and lock it in the proper place cannot be forgot.",
        thirdDescription: "Save them in you computer would be convience, but if your hard-disk is dead you could lose all your assets."
      }
    },
    loginPage: {
      title: "Login",
      uploadFileBtn: "Upload My Wallet File",
      uploadFileBtnUploaded: "Upload success",
      inputPasswordLabel: "Please input your password",
      confirmBtn: "Confirm",
      restoreLink: "Restore by mnemonics",
      errors: {
       loginError: "Invalid file or password"
      },
      restoreDescLabel: "Click link above if you don't have wallet file, forgot PIN, log in on not frequently used device"
    },
    createWallet: {
      errors: {
        notMatch: "Passwords doesn't match.",
        notEntered: "No passwords entered."
      },
      title: "Create New Wallet",
      setPassword: "Set your password:",
      confirmPassword: "Confirm your password:",
      passwordInfo1: "Password used to unlock your wallet file.",
      passwordInfo2: "You will be asked to input it when you log in and make transfers.",
      agree: "I have read and agree Term of usage for INK wallet",
      passwordNextBtn: "Next",
      goToMainPageBtn: "Go to main page",
      showAddressTitle: "Your wallet address",
      showAddressDescr: "Wallet address is the identity of your wallet." +
      "You can tell it to others.  For yourself, Mnenonics and Wallet" +
      "File are the keys to your wallet. Wallet File is used to log in" +
      "your wallet, and Mnemonics is used to restore your wallet in other" +
      "devices.So you should hold both of them. Stressly, Ink will not save mnenonics or" +
      "wallet file.Do Remember Your Mnenonics and Wallet Files and don't share them with anyone",
      showAddressNextBtn: "Understand,\n get my Mnemonics and Wallet Files",
      showMnemonicTitle: "Your Mnemonics",
      showMnemonicDescr: "Once more, Wallet File is used to log in your wallet," +
      "and Mnemonics is used to restore your wallet in other devices." +
      "Anyone who get the mnenonics or wallet file can get in your wallet." +
      "You MUST write down your mnenonics," +
      "download your wallet file and save them carefully and safely." +
      "You CAN NOT re-get your wallet if you lose both of them." +
      "Do Remember Your Mnenonics and Wallet File and don't share them with anyone.",
      showMnemonicNextBtn: "Understand and get started",
      showMnemonicDownloadBtn: "Download your Wallet File"
    },
    sendTransaction: {
      modalTitle: "Send",
      prepareForm: {
        token: "Token",
        availableAmount: "Available amount:",
        amountPlaceholder: "Input address",
        to: "To",
        amount: "Amount",
        description: "Description",
        fee: {
          label: "Fees",
          custom: "Custom",
          standart: "Standart",
          slow: "Slow",
          quick: "quick"
        },
        confirmBtn: "Confirm",
        errors: {
          emptyAddress: "Address field is empty",
          emptyAmount: "Amount field is empty",
          invalidAmount: "Amount is invalid",
          invalidAddress: "Address is invalid",
          amountLow: "Amount to send more than your balance"
        }
      },
      confirmForm: {
        token: "Token:",
        to: "To:",
        amount: "Amount:",
        description: "Description:",
        fees: "Fees",
        inputPassword: "Input password",
        errors: {
          passwordIsIncorrect: "Incorrect password",
          passwordIsEmpty: "Password field is empty"
        },
        confirmBtn: "Confirm"
      },
      successForm: {
        succeed: "Succeed",
        doneBtn: "Done"
      }
    },
    receive: {
      modalTitle: "Send",
      qrDescription: "Scan the QR code or copy and share your wallet address to receive tokens in your wallet.",
      addressLabel: "Your wallet address",
      copyBtn: "Copy address"
    },
    restoreWallet: {
      title: "Restore",
      inputYourMnemonics: "Please input your mnemonics",
      errors: {
        invalid: "Invalid mnemonic",
        notEntered: "No mnemonics entered"
      },
      passwordInfo: "This password is for your NEW wallet file only." +
      " You can just use it once or download it for later." +
      "You old wallet file is still valid and its password is NOT be changed.",
      resetPassword: "Reset your password:",
      resetPassword2: "Confirm your password:",
      restoreSuccessTitle: "Successed!",
      restoreInfo: {
        info1: "If you only use this wallet file & password one-off, please DO NOT\n" +
        "download it. If so, your new password will not be saved after you loging out.",
        info2: "Aware the old wallet file is still valid and its password is not changed.",
        info3: "OLD password for OLD waller file, NEW password for the new one.\n" +
        "You can delete the old wallet file to aviod confusion"
      }
    }
  },
  zh: {
    header: {
      loginBtnLabel: "Login1",
      logoutBtnLabel: "Logout1"
    },
    main: {
      createWalletBtnLabel: "Create New Wallet1",
      restoreWalletBtnLabel: "Restore My Wallet1"
    },
    mainPage: {
      sendBtn: "Send1",
      importMoreBtn: "Import more1",
      receiveBtn: "Receive1",
      recentTitle: "Recent1"
    },
    createWallet: {
      errors: {
        notMatch: "Passwords doesn't match.1",
        notEntered: "No passwords entered.1"
      },
      title: "Create New Wallet1",
      setPassword: "Set your password:1",
      confirmPassword: "Confirm your password:1",
      passwordInfo1: "Password used to unlock your wallet file.1",
      passwordInfo2: "You will be asked to input it when you log in and make transfers.1",
      agree: "I have read and agree Term of usage for INK wallet1",
      passwordNextBtn: "Next1",
      goToMainPageBtn: "Go to main page1",
      showAddressTitle: "Your wallet address1",
      showAddressDescr: "Wallet 1111 address is the identity of your wallet. " +
      "You can tell it to others.  For yourself, Mnenonics and Wallet File are" +
      " the keys to your wallet. Wallet File is used to log in your wallet, and " +
      "Mnemonics is used to restore your wallet in other devices.So you should " +
      "hold both of them. Stressly, Ink will not save mnenonics or wallet file." +
      "Do Remember Your Mnenonics and Wallet Files and don't share them with anyone",
      showAddressNextBtn: "Understand1,\n" +
      "get my Mnemonics and Wallet Files1",
      showMnemonicTitle: "You Mnemonics1",
      showMnemonicDescr: "1Once more, Wallet File is used to log in your wallet," +
      "and Mnemonics is used to restore your wallet in other devices." +
      "Anyone who get the mnenonics or wallet file can get in your wallet." +
      "You MUST write down your mnenonics," +
      "download your wallet file and save them carefully and safely." +
      "You CAN NOT re-get your wallet if you lose both of them." +
      "Do Remember Your Mnenonics and Wallet File and don't share them with anyone.",
      showMnemonicNextBtn: "Understand and get started1",
      showMnemonicDownloadBtn: "Download your Wallet File1"
    },
    restoreWallet: {
      title: "Restore1",
      inputYourMnemonics: "Please input your mnemonics1",
      errors: {
        invalid: "Invalid mnemonic1",
        notEntered: "No mnemonics entered1"
      },
      passwordInfo: "11This password is for your NEW wallet file only." +
      " You can just use it once or download it for later." +
      "You old wallet file is still valid and its password is NOT be changed.",
      resetPassword: "1Reset your password:",
      resetPassword2: "1Confirm your password:",
      restoreSuccessTitle: "1Successed!",
      restoreInfo: {
        info1: "1If you only use this wallet file & password one-off, please DO NOT\n" +
        "download it. If so, your new password will not be saved after you loging out.",
        info2: "1Aware the old wallet file is still valid and its password is not changed.",
        info3: "1OLD password for OLD waller file, NEW password for the new one.\n" +
        "You can delete the old wallet file to aviod confusion"
      }
    }
  },
  ko: {
    header: {
      loginBtnLabel: "Login2",
      logoutBtnLabel: "Logout2"
    },
    main: {
      createWalletBtnLabel: "Create New Wallet2",
      restoreWalletBtnLabel: "Restore My Wallet2"
    },
    mainPage: {
      sendBtn: "Send2",
      receiveBtn: "Receive2",
      importMoreBtn: "Import more2",
      recentTitle: "Recent2"
    },
    createWallet: {
      errors: {
        notMatch: "Passwords doesn't match.2",
        notEntered: "No passwords entered.2"
      },
      title: "Create New Wallet2",
      setPassword: "Set your password:2",
      confirmPassword: "Confirm your password:2",
      passwordInfo1: "Password used to unlock your wallet file.2",
      passwordInfo2: "You will be asked to input it when you log in and make transfers.2",
      agree: "I have read and agree Term of usage for INK wallet2",
      passwordNextBtn: "Next2",
      goToMainPageBtn: "Go to main page2",
      showAddressTitle: "Your wallet address2",
      showAddressDescr: "Wallet 222 address is the identity of " +
      "your wallet. You can tell it to others.  For yourself, Mnenonics and Wallet File are" +
      " the keys to your wallet. " +
      "Wallet File is used to log in your wallet, and Mnemonics is used to restore your" +
      " wallet in other devices." +
      "So you should hold both of them. Stressly, Ink will not save mnenonics or wallet" +
      " file.Do Remember " +
      "Your Mnenonics and Wallet Files and don't share them with anyone",
      showAddressNextBtn: "Understand1,\n" +
      "get my Mnemonics and Wallet 222",
      showMnemonicTitle: "Your Mnemonics1",
      showMnemonicDescr: "Once more, Wallet File is used to log in your wallet," +
      "and Mnemonics is used to restore your wallet in other devices." +
      "Anyone who get the mnenonics or wallet file can get in your wallet." +
      "You MUST write down your mnenonics,1" +
      "download your wallet file and save them carefully and safely." +
      "You CAN NOT re-get your wallet if you lose both of them." +
      "Do Remember Your Mnenonics and Wallet File and don't share them with anyone.",
      showMnemonicNextBtn: "Understand and get started2",
      showMnemonicDownloadBtn: "Download your Wallet File1"
    },
    restoreWallet: {
      title: "2Restore",
      inputYourMnemonics: "2Please input your mnemonics",
      errors: {
        invalid: "2Invalid mnemonic",
        notEntered: "2No mnemonics entered"
      },
      passwordInfo: "2This password is for your NEW wallet file only." +
      " You can just use it once or download it for later." +
      "You old wallet file is still valid and its password is NOT be changed.",
      resetPassword: "2Reset your password:",
      resetPassword2: "2Confirm your password:",
      restoreSuccessTitle: "2Successed!",
      restoreInfo: {
        info1: "2If you only use this wallet file & password one-off, please DO NOT\n" +
        "download it. If so, your new password will not be saved after you loging out.",
        info2: "2Aware the old wallet file is still valid and its password is not changed.",
        info3: "2OLD password for OLD waller file, NEW password for the new one.\n" +
        "You can delete the old wallet file to aviod confusion"
      }
    }
  },
  ja: {
    header: {
      loginBtnLabel: "Login3",
      logoutBtnLabel: "Logout3"
    },
    main: {
      createWalletBtnLabel: "Create New Wallet3",
      restoreWalletBtnLabel: "Restore My Wallet3"
    },
    mainPage: {
      sendBtn: "Send3",
      importMoreBtn: "Import more3",
      receiveBtn: "Receive3",
      recentTitle: "Recent3"
    },
    createWallet: {
      errors: {
        notMatch: "Passwords doesn't match.3",
        notEntered: "No passwords entered.3"
      },
      title: "Create New Wallet3",
      setPassword: "Set your password:3",
      confirmPassword: "Confirm your password:3",
      passwordInfo1: "Password used to unlock your wallet file.3",
      passwordInfo2: "You will be asked to input it when you log in and make transfers.3",
      agree: "I have read and agree Term of usage for INK wallet3",
      passwordNextBtn: "Next3",
      goToMainPageBtn: "Go to main page3",
      showAddressTitle: "Your wallet address3",
      showAddressDescr: "Wallet 333 address is the identity of " +
      "your wallet. You can tell it to others.  For yourself, Mnenonics and Wallet File are" +
      " the keys to your wallet. " +
      "Wallet File is used to log in your wallet, and Mnemonics is used to restore your" +
      " wallet in other devices." +
      "So you should hold both of them. Stressly, Ink will not save mnenonics or wallet" +
      " file.Do Remember " +
      "Your Mnenonics and Wallet Files and don't share them with anyone",
      showAddressNextBtn: "Understand1,\n" +
      "get my Mnemonics and Wallet 333",
      showMnemonicTitle: "Your Mnemonics3",
      showMnemonicDescr: "333Once more, Wallet File is used to log in your wallet," +
      "and Mnemonics is used to restore your wallet in other devices." +
      "Anyone who get the mnenonics or wallet file can get in your wallet." +
      "You MUST write down your mnenonics,1" +
      "download your wallet file and save them carefully and safely." +
      "You CAN NOT re-get your wallet if you lose both of them." +
      "Do Remember Your Mnenonics and Wallet File and don't share them with anyone.",
      showMnemonicNextBtn: "Understand and get started33",
      showMnemonicDownloadBtn: "Download your Wallet File33"
    },
    restoreWallet: {
      title: "3Restore",
      inputYourMnemonics: "3Please input your mnemonics",
      errors: {
        invalid: "3Invalid mnemonic",
        notEntered: "3No mnemonics entered"
      },
      passwordInfo: "3This password is for your NEW wallet file only." +
      " You can just use it once or download it for later." +
      "You old wallet file is still valid and its password is NOT be changed.",
      resetPassword: "3Reset your password:",
      resetPassword2: "3Confirm your password:",
      restoreSuccessTitle: "3Successed!",
      restoreInfo: {
        info1: "3If you only use this wallet file & password one-off, please DO NOT\n" +
        "download it. If so, your new password will not be saved after you loging out.",
        info2: "3Aware the old wallet file is still valid and its password is not changed.",
        info3: "3OLD password for OLD waller file, NEW password for the new one.\n" +
        "You can delete the old wallet file to aviod confusion"
      }
    }
  }
};

export const LANG_LABELS = {
  en: "EN",
  ja: "日本語",
  zh: "中文",
  ko: "한국어"
};
