import React from "react";
import styles from "./Seach.module.css";
import searchSvg from "../../images/search.svg";
import { useNavigate } from "react-router-dom";

const Seach = () => {
  const navigate = useNavigate();

  const [value, setValue] = React.useState("");

  function handleSubimit(event) {
    event.preventDefault();
    navigate(`/pesquisa/${value}`);
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubimit}>
        <button>
          <img src={searchSvg} alt="Pesquisa" />
        </button>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="Pesquisar no blog"
        />
      </form>
    </div>
  );
};

export default Seach;
