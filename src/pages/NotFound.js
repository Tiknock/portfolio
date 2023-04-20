import React from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation("en", { useSuspense: false });

  return (
    <div className="page-404">
      <Layout>
        <div className="container-404">
          <h2>404</h2>
          <p>{t("404")}</p>
        </div>
      </Layout>
    </div>
  );
};

export default NotFound;
