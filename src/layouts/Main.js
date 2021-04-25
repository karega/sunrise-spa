import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Main = ({children}) => {
    const { t, i18n, ready } = useTranslation();
    if(ready)
    return (
        <div className={clsx("main-wrapper main-wrapper-2 main-wrapper-3", {["overlay-active"]: false})}>
        {children}
    </div>
    )
    else 
    return <div>Loading</div>
}
export default Main;