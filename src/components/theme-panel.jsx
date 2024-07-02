import Task from './task'
import React, { useState } from 'react';
import TestContainer from "./test-container";
import EndOfTest from "./end-of-test";
import DOMPurify from 'dompurify';

const ThemePanel = ({ isExpanded, onIconClick, selectedTheme }) => {
    // Состояния для теста: 'start', 'test', 'end'
    const [testStage, setTestStage] = useState('start');

    const handleStartTest = () => {
        setTestStage('test');
    };

    const handleEndTest = () => {
        setTestStage('end');
    };

    const handleRestartTest = () => {
        setTestStage('test');
    };

    // Очистка текста для безопасной вставки кода из базы данных
    const cleanHTML = DOMPurify.sanitize(selectedTheme ? selectedTheme.text_on_page : 'Выберите тему, чтобы увидеть её содержание');
    return (
        <div className={`theme-container ${isExpanded ? 'active' : ''}`}>
            <div className="tasks-name">
                {/*Кнопка для скрытия боковой панели*/}
                <svg onClick={onIconClick} viewBox="0 0 1024 1024" className="tasks-icon">
                    <path d="M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 512l170-170v340zM470 726v-86h426v86h-426z"></path>
                </svg>
                <h1 className="tasks-text2">{selectedTheme ? selectedTheme.name : 'Выберите тему'}</h1>
            </div>
            <div className="tasks-content">
                <div dangerouslySetInnerHTML={{__html: cleanHTML}}/>
                <a href="https://example.com" target="_blank" rel="noreferrer noopener" className="tasks-link">
                    -- Презентация к теме.
                </a>
            </div>

            <div className="tasks-test">
            {testStage === 'start' && (
                    <div className="outline-black-button-container">
                        <button onClick={handleStartTest} className="outline-black-button-button button ButtonSmall">
                            Начать тест по теме
                        </button>
                    </div>
                )}
                {testStage === 'test' && (
                    <TestContainer rootClassName="test-container-root-class-name" onEndTest={handleEndTest} />
                )}
                {testStage === 'end' && <EndOfTest onRestartTest={handleRestartTest} rootClassName="end-of-test-root-class-name" />}
            </div>
            <Task />
            <Task />
        </div>
    );
};

export default ThemePanel;