import { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Appbar, Btn, Flex, HolyGrail, MaterialSymbolIcon, Panel, useTheme } from 'roku-ui'
import { useUserData } from '../../api'

export function Dashboard () {
  useTheme()
  const user = useUserData()
  const nav = useNavigate()
  useEffect(() => {
    if (!user.data) nav('/')
  }, [nav, user.data])
  return (
    <div className="App">
      <HolyGrail
        style={{ height: '100%' }}
        header={<Appbar
          border
          icon={<img alt="CodeTime Logo" width={20} src="/icon.svg" />}
          varient="pattern"
          title={
            <div>
              CodeTime
            </div>
          }
          tailing={
            <div>User Avatar</div>
          }
        />}
        main={
          <>
            <Flex justify="center">
              <Panel style={{ marginTop: '1rem', borderRadius: '999px', lineHeight: 0 }}>
                <Flex >
                  {
                    [
                      { to: '/dashboard', icon: 'cottage' },
                      { to: '/dashboard/shields', icon: 'workspace_premium' },
                      { to: '/dashboard/settings', icon: 'construction' },
                    ].map(d => {
                      return (
                        <NavLink key={d.to} end to={d.to} >
                          {
                            ({ isActive }) => {
                              return (
                                <Btn icon text color={ isActive ? 'primary' : 'default'}>
                                  <MaterialSymbolIcon icon={ d.icon } />
                                </Btn>
                              )
                            }
                          }
                        </NavLink>
                      )
                    })
                  }
                </Flex>
              </Panel>
            </Flex>
            <Outlet />
          </>
        }
      />
    </div>
  )
}