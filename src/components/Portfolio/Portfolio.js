import React from "react";
import "./Portfolio.css";

import project1Img from "../../assets/icons/projects/irvas-project.png";
import project2Img from "../../assets/icons/projects/loan-project.png";
import project3Img from "../../assets/icons/projects/marvel-web-app1.png";
import project4Img from "../../assets/icons/projects/picture-project.png";
import project5Img from "../../assets/icons/projects/food-project.png";

const projects = [
    {
        title: "Irvas Project (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету из Figma. Реализована интерактивность с помощью JavaScript, включая различные модальные окна и формы обратной связи. Стилизация выполнена с использованием CSS.",
        imageUrl: project1Img,
        tech: ["HTML", "CSS", "JavaScript"], // Список технологий
        liveUrl: "https://irvas-project.vercel.app/", // Ссылка на живой демо
        repoUrl: "https://github.com/blesswrld/irvas-project", // Ссылка на GitHub репозиторий
    },
    {
        title: "Loan Project (Лендинг)",
        description:
            "Адаптивный многостраничный лендинг, сверстанный по макету Figma. Стилизация реализована с использованием препроцессора Sass. JavaScript применен для создания интерактивных элементов, таких как формы и слайдеры. Интегрирован YouTube API для динамической подгрузки видео.",
        imageUrl: project2Img,
        tech: ["HTML", "Sass", "JavaScript", "API Integration"],
        liveUrl: "https://loan-project-phi.vercel.app/",
        repoUrl: "https://github.com/blesswrld/loan-project",
    },
    {
        title: "Marvel Project (Веб-приложение)",
        description:
            "Приложение на React для исследования вселенной Marvel. Построено с использованием функциональных компонентов и хуков для работы с асинхронными запросами к API. Позволяет просматривать список персонажей Marvel и комиксов, и получать информацию о них.",
        imageUrl: project3Img,
        tech: ["React", "JS (Hooks)", "API Integration", "SASS"],
        liveUrl: "https://react-api-app-marvel.vercel.app/",
        repoUrl: "https://github.com/blesswrld/react-api-app-marvel",
    },
    {
        title: "Picture Project (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету Figma. Применен JavaScript для создания интерактивных элементов: модальные окна (включая автоматически всплывающее по таймеру popup-окно), формы обратной связи и слайдер. Реализована работа с JSON Server для динамической подгрузки контента и имитации отправки данных форм.",
        imageUrl: project4Img,
        tech: ["HTML", "JavaScript", "JSON Server", "CSS"],
        liveUrl: "https://picture-project-xi.vercel.app/",
        repoUrl: "https://github.com/blesswrld/picture-project",
    },
    {
        title: "Food Project (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету Figma. С помощью JavaScript реализованы интерактивные элементы: модальные окна (включая автоматически всплывающее по таймеру popup-окно) и формы обратной связи. Настроен JSON Server для динамической подгрузки данных и имитации отправки данных с форм.",
        imageUrl: project5Img,
        tech: ["HTML", "JavaScript", "JSON Server", "CSS"],
        liveUrl: "https://food-project-amber-phi.vercel.app/",
        repoUrl: "https://github.com/blesswrld/food-project",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <h2>Мои Работы</h2>
                <p className="portfolio-intro">
                    Здесь собраны некоторые из моих проектов. Кликните, чтобы
                    увидеть подробности или демо.
                </p>
                {projects.length > 0 ? (
                    <div className="portfolio-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="portfolio-card">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="portfolio-image"
                                />
                                <div className="portfolio-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="portfolio-tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-tag">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="portfolio-links">
                                        {project.liveUrl &&
                                            project.liveUrl !== "#" && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-small"
                                                >
                                                    Демо
                                                </a>
                                            )}
                                        {project.repoUrl &&
                                            project.repoUrl !== "#" && (
                                                <a
                                                    href={project.repoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-secondary btn-small"
                                                >
                                                    Код
                                                </a>
                                            )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Здесь скоро появятся мои проекты...</p>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
