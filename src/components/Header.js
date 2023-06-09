import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/nav.css"
import { AUTH_TOKEN } from '../constans';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/manhwas"}>{t("Home")}</Link>
        </li>
        <li>
          <Link to={"/subir"}>{t("Add")}</Link>
        </li>
        <li>
          <Link to={"/about"}>{t("About")}</Link>
        </li>
        {authToken ? (
          <>
            <Link
              className='also'
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                navigate(`/`);
              }}
            >
              Logout
            </Link>
            <Link to={"/menuias"} className='also'>{t("Services IA")}</Link>
            <Link to={"/search"} className='also'>{t("My Prompts")}</Link>
          </>
        ) : (
          <Link to="/login" className='also'>{t("Login")}</Link>
        )}
      </ul>
      <div className="flex flex-fixed">
        <div className="ml1 pointer black">
          {t('select_language')}
        </div>
        <div className="ml1 pointer black"> : </div>

        <div>
          <LanguageSelect
            className="ml1 pointer black"
          />
        </div>
      </div>
    </nav >
  );
};

export default Header;