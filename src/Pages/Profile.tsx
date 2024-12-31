import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseconfig.ts";
import { onAuthStateChanged } from "firebase/auth";

const Profile: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("John Doe");
  const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/150");
  const [preferences, setPreferences] = useState({ theme: "dark" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchUserData(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserData = async (uid: string) => {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      setUsername(data.username || "John Doe");
      setProfilePicture(data.profilePicture || "https://via.placeholder.com/150");
      setPreferences(data.preferences || { theme: "dark" });
    } else {
      // If no document exists, initialize with default values
      await setDoc(doc(db, "users", uid), {
        username: "John Doe",
        profilePicture: "https://via.placeholder.com/150",
        preferences: { theme: "dark" },
      });
    }
  };

  const handleUpdateProfile = async () => {
    try {
      await updateDoc(doc(db, "users", userId), {
        username,
        profilePicture,
        preferences,
      });
      alert("Profile updated!");
    } catch (err) {
      alert("Error updating profile: " + err);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="bg-gray-900 p-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">My Profile</h1>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-8">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">{username}</h2>
              <button
                onClick={handleUpdateProfile}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition mt-2"
              >
                Edit Profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Preferences</h3>
              <div className="flex items-center space-x-4">
                <label className="text-gray-400">Theme:</label>
                <select
                  value={preferences.theme}
                  onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
                  className="bg-gray-900 text-white border border-gray-600 rounded p-2"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
