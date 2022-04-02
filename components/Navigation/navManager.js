import Navlink from "./Navlink";
import Dropdown from "./Dropdonw";
const getNavComponent = ({ __component, ...rest }, index) => {
    let Shared
    switch (__component) {
        case 'shared.dropdown':
            Shared = Dropdown;
            break;

        case 'shared.link':
            Shared = Navlink;
            break;
    }

    return Shared ? <Shared key={`index-${index}`} {...rest} /> : null;
};
const NavManager = ({ navigation }) => {
    const menu = navigation.navmenu
    // console.log(menu)
    return <>{menu.map(getNavComponent)}</>;
};


export default NavManager;