import { HashRouter } from 'react-router-dom';
import { RouterComponent } from './router';
import './app.scss';
import { FooterComponent, HeaderComponent } from './shared/components';
import { Interceptor } from './core/axios-config';
import  { useEffect, useState } from 'react';
import { useActionsWithEffects } from './core/hooks/use-actions-with-effects';
import { useTypedSelector } from './core/hooks/use-typed-selectors';
import { MenuDTO, MenuItemDTO } from './core/dto/menu.dto';
import {  CircularProgress } from '@mui/material';

function App() {
  const { loadMenu } = useActionsWithEffects();
  const { menuList, menuLoadError, currentMenu } = useTypedSelector(state => state.menu as MenuDTO);
  const [menuItems, setMenuItems] = useState<MenuItemDTO[]>([]);
  const [loadingStatusText, setLoadingStatusText] = useState<string>('Loading assets. Please wait ...');
  useEffect(() => {
    loadMenu();
    Interceptor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (menuLoadError) {
      setLoadingStatusText(menuLoadError);
    }
  }, [menuLoadError]);
  useEffect(() => {
    if (menuList && menuList.length > 0 && currentMenu !== "") {
      const menu = menuList.filter((menu) => {
        return (menu.menuName === currentMenu)
      })[0];
      if (menu) {
        setMenuItems(menu.menuItems);
      }
    }
  }, [currentMenu, menuList]);
  return (
    <HashRouter>
      {
        (menuList && menuList.length > 0)
          ?
          <div className='app'>
            <div className='container'>
              <HeaderComponent menuItems={menuItems} />
              <RouterComponent />
            </div>
            <FooterComponent />
          </div>
          :
          <div className='initializing'><CircularProgress />{loadingStatusText}</div>
      }
    </HashRouter>
  );
}

export default App;
