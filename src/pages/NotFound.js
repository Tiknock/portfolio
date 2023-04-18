import React from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation("en", { useSuspense: false });

  return (
    <div className="404-page">
      <Layout>
        <div className="404-container">
          <h1>404</h1>
          <p>{t("404")}</p>
        </div>
      </Layout>
    </div>
  );
};

export default NotFound;
