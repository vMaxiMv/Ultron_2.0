import {useState} from "react";
import tbMobile from './ToolbarStyles/MobileToolbar.module.scss'
import ActivityButtonsToolbar from "@/components/ActivityList/innerToolbarComponent/ActivityButtonsToolbar";


function MobileToolbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const handleMenuClick = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className={tbMobile.Mobile_Menu}>
            <div className={tbMobile.burger_menu} onClick={handleMenuClick}>
                <div className={`${tbMobile.line} ${isMenuOpen ? tbMobile.line1_open : ''}`}></div>
                <div className={`${tbMobile.line} ${isMenuOpen ? tbMobile.line2_open : ''}`}></div>
                <div className={`${tbMobile.line} ${isMenuOpen ? tbMobile.line3_open : ''}`}></div>
            </div>

            {isMenuOpen && (
                <div className={tbMobile.menu_overlay}>
                    <div className={tbMobile.close_btn} onClick={handleMenuClick}>
                        <div className={`${tbMobile.cross_angle} ${tbMobile.line1}`} />
                        <div className={`${tbMobile.cross_angle} ${tbMobile.line2}`} />
                    </div>
                    <ActivityButtonsToolbar/>
                </div>
            )}
        </div>
    );
}

export default MobileToolbar;