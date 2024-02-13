export default defineI18nConfig(() => ({
   legacy: false,
   locale: "en",
   messages: {
      de: {
         auth: {
            welcome: "Willkommen",
            logIn: {
               title: "Einloggen",
               email: "E-Mail-Adresse",
               password: "Passwort",
               button: "Einloggen",
            },

            signUp: {
               title: "Registrieren",
               email: "E-Mail-Adresse",
               password: "Passwort",
               passwordConfirm: "Passwort bestätigen",
               button: "Registrieren",
            },

            infoText: {
               or: "oder",
               redirectToSignup: "Sie haben noch kein Konto?",
               redirectToLogin:
                  "Wenn Sie ein Konto haben, melden Sie sich hier an!",
            },

            redirectToSignup: "Registrieren",
            redirectToLogin: "Einloggen",
            testAccount: "Testkonto ausprobieren",
         },
         nav: {
            links: ["Notiz"],
            signOut: "Abmelden",
         },
         calendar: {
            options: {
               editButton: "Bearbeiten",
               checkButton: "Überprüfen",
            },
            editor: {
               loading: "Laden...",
               form: {
                  title: "Titel...",
                  notification: "Benachrichtigung",
                  note: "Notiz:",
                  closeButton: "Schließen",
                  saveButton: "Speichern",
                  backButton: "Zurück",
                  editButton: "Bearbeiten",
               },
            },
            events: {
               empty: {
                  list: "Fügen Sie Ihre Ereignisse hinzu...",
                  addEventButton: "Ereignis hinzufügen",
                  closeList: "Schließen",
                  title: "Leerer Titel",
                  note: "Leere Notiz...",
                  time: "Keine Zeit",
               },
            },
         },
         notes: {
            closeButton: "Schließen",
            tasks: {
               emptyList: "Ihre Liste ist leer.",
               emptyContent: "Keine Aufgabe",
            },

            editor: {
               selectorMessage: "Nachricht",
               selectorChecklist: "Checkliste",
               title: "Titel",
               taskTitle: "Aufgabe",
               addTask: "Hinzufügen...",
               message: "Nachricht...",
               emptyTitle: "Leerer Titel",
               emptyContent: "Keine Aufgabe",
               editButton: "Bearbeiten",
               saveButton: "Speichern",
            },
         },
         settings: {
            title: "Kontodaten",
            password: "Benutzerpasswort",
            change: "Ändern",
            deleteTitle: "Konto löschen",
            deleteMessage:
               "Wenn Sie Ihr Konto löschen, verlieren Sie alle gespeicherten Bestellungen sowie Ihre Daten. Bitte stellen Sie sicher, dass Sie Ihr Konto löschen möchten - leider können wir es nicht wiederherstellen.",
            deleteButton: "Konto löschen",

            modal: {
               title: "Passwort",
               newPassword: "Neues Passwort",
               confirmPassword: "Passwort bestätigen",
               saveButton: "Speichern",
               errorContainMessage: "Ihr Passwort sollte 6 Zeichen enthalten!",
               errorDifferentMessage: "Ihre Passwörter sind unterschiedlich!",
               errorMessage:
                  "Etwas ist schief gelaufen! Versuchen Sie es später erneut.",
            },

            langSelector: {
               title: "Sprache auswählen",
               defaultValue: "--Bitte wählen Sie eine Sprache--",
            },
         },
         error: {
            closeButton: "Schließen",
         },
      },
      pl: {
         auth: {
            welcome: "Witaj",
            logIn: {
               title: "Zaloguj się",
               email: "adres e-mail",
               password: "hasło",
               button: "Zaloguj się",
            },

            signUp: {
               title: "Zarejestruj się",
               email: "adres e-mail",
               password: "hasło",
               passwordConfirm: "potwierdź hasło",
               button: "Zarejestruj się",
            },

            infoText: {
               or: "lub",
               redirectToSignup: "Nie masz jeszcze konta?",
               redirectToLogin: "Jeśli masz konto, zaloguj się tutaj!",
            },

            redirectToSignup: "Zarejestruj się",
            redirectToLogin: "Zaloguj się",
            testAccount: "Wypróbuj konto testowe",
         },
         nav: {
            links: ["notatka"],
            signOut: "wyloguj się",
         },
         calendar: {
            options: {
               editButton: "Edytuj",
               checkButton: "Sprawdź",
            },
            editor: {
               loading: "Ładowanie...",
               form: {
                  title: "Tytuł...",
                  notification: "Powiadomienie",
                  note: "Notatka:",
                  closeButton: "Zamknij",
                  saveButton: "Zapisz",
                  backButton: "Wróć",
                  editButton: "Edytuj",
               },
            },
            events: {
               empty: {
                  list: "Dodaj swoje wydarzenia...",
                  addEventButton: "Dodaj wydarzenie",
                  closeList: "Zamknij",
                  title: "Pusty tytuł",
                  note: "Pusta notatka...",
                  time: "Brak czasu",
               },
            },
         },
         notes: {
            closeButton: "Zamknij",
            tasks: {
               emptyList: "Twoja lista jest pusta.",
               emptyContent: "Brak zadania",
            },

            editor: {
               selectorMessage: "Wiadomość",
               selectorChecklist: "Lista kontrolna",
               title: "Tytuł",
               taskTitle: "Zadanie",
               addTask: "Dodaj...",
               message: "Wiadomość...",
               emptyTitle: "Pusty tytuł",
               emptyContent: "Brak zadania",
               editButton: "Edytuj",
               saveButton: "Zapisz",
            },
         },
         settings: {
            title: "Dane konta",
            password: "Hasło użytkownika",
            change: "Zmień",
            deleteTitle: "Usuń konto",
            deleteMessage:
               "Po usunięciu konta utracisz wszystkie zapisane zamówienia oraz dane. Upewnij się, że chcesz usunąć konto - niestety nie będziemy w stanie go przywrócić.",
            deleteButton: "Usuń konto",

            modal: {
               title: "Hasło",
               newPassword: "Nowe hasło",
               confirmPassword: "Potwierdź hasło",
               saveButton: "Zapisz",
               errorContainMessage: "Twoje hasło powinno zawierać 6 znaków!",
               errorDifferentMessage: "Twoje hasła są różne!",
               errorMessage: "Coś poszło nie tak! Spróbuj ponownie później.",
            },

            langSelector: {
               title: "Wybierz język",
               defaultValue: "--Proszę wybrać język--",
            },
         },
         error: {
            closeButton: "Zamknij",
         },
      },
      en: {
         auth: {
            welcome: "Welcome",
            logIn: {
               title: "Log in",
               email: "e-mail address",
               password: "password",
               button: "Log in",
            },

            signUp: {
               title: "Sign up",
               email: "e-mail address",
               password: "password",
               passwordConfirm: "confirm password",
               button: "Sign up",
            },

            infoText: {
               or: "or",
               redirectToSignup: "You don't have an account yet?",
               redirectToLogin: "If you have an account log in here!",
            },

            redirectToSignup: "Sign up",
            redirectToLogin: "Log in",
            testAccount: "Try test account",
         },
         nav: {
            links: ["note"],
            signOut: "sign out",
         },
         calendar: {
            options: {
               editButton: "Edit",
               checkButton: "Check",
            },
            editor: {
               loading: "Loading...",
               form: {
                  title: "Title...",
                  notification: "Notification",
                  note: "Note:",
                  closeButton: "Exit",
                  saveButton: "Save",
                  backButton: "Back",
                  editButton: "Edit",
               },
            },
            events: {
               empty: {
                  list: "Add your events..",
                  addEventButton: "add event",
                  closeList: "Exit",
                  title: "Empty title",
                  note: "Empty note...",
                  time: "No time",
               },
            },
         },
         notes: {
            closeButton: "Close",
            tasks: {
               emptyList: "Your list is empty.",
               emptyContent: "No task",
            },

            editor: {
               selectorMessage: "Message",
               selectorChecklist: "Checklist",
               title: "Title",
               taskTitle: "Task",
               addTask: "Add...",
               message: "message...",
               emptyTitle: "Empty title",
               emptyContent: "No task",
               editButton: "Edit",
               saveButton: "Save",
            },
         },
         settings: {
            title: "Account Date",
            password: "User password",
            change: "Change",
            deleteTitle: "Delete account",
            deleteMessage:
               "When you delete your account, you will lose all your saved orders as well as your data. Please make sure you want to delete your account - unfortunately we will not be able to restore it.",
            deleteButton: "Delete account",

            modal: {
               title: "Password",
               newPassword: "New password",
               confirmPassword: "Confirm password",
               saveButton: "Save",
               errorContainMessage:
                  "your password should contain 6 characters!",
               errorDifferentMessage: "your passwords are different!",
               errorMessage: "Something goes wrong!, try later.",
            },

            langSelector: {
               title: "Select language",
               defaultValue: "--Please choose a language--",
            },
         },
         error: {
            closeButton: "Close",
         },
      },
   },
}));