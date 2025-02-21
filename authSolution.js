let unsubscribe;

const authStateChanged = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log('User signed in:', user.uid);
    } else {
      // User is signed out
      console.log('User signed out');
    }
  });
};

// Call this function to start listening to authentication state changes
const startListening = () => {
  authStateChanged();
};

// Call this function to stop listening and cleanup
const stopListening = () => {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }
};

// Example usage:
startListening();
// ... later in your component's lifecycle, call stopListening() to prevent memory leaks
stopListening();