import React from 'react';
import Empty from "./EmptyActivity.module.scss"
function EmptyActivity() {
    return (
        <div className={Empty.main_block}>
            <div className={Empty.title}>
                <h2>Активность не выбрана</h2>
            </div>
            <div className={Empty.sadRobot}>
                <img className="sad_robot" src="/images/sad-strong-robot.svg" alt="Nothing here"/>
            </div>
        </div>
    );
}

export default EmptyActivity;