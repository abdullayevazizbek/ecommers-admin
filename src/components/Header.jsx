import React from 'react'
import { Select } from 'antd'
import Logo from '../assets/icons/Logo'

function Header() {
    return  <div className='header'>
        <div className="header__row">
            <div className='header__logo'>
                <Logo />
            </div>
            <div className="header__select">
                <Select
                    defaultValue='uzbek'
                    style={{
                        width: 120,
                    }}
                    options={[
                        {
                            value: 'Uzbek',
                            label: 'Uzbek',
                        },
                        {
                            value: 'Рус',
                            label: 'Рус',
                        },
                        
                    ]}
                />
            </div>
        </div>
    </div>
}

export default Header