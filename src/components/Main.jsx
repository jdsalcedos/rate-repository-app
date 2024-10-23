import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import LogInPage from "../pages/Login";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<LogInPage />} exact />
        <Route render={() => <Redirect to="/" />} />
      </Routes>
    </View>
  );
};

export default Main;
