import * as React from 'react'

const Logo = (props) => (
    <svg
        width={105}
        height={36}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path d='M0 0h62c11.046 0 20 8.954 20 20v16H0V0Z' fill='#27376F' />
        <path
            d='M29.74 17.8c.813.173 1.467.58 1.96 1.22.493.627.74 1.347.74 2.16 0 1.173-.413 2.107-1.24 2.8-.813.68-1.953 1.02-3.42 1.02h-6.54V10.96h6.32c1.427 0 2.54.327 3.34.98.813.653 1.22 1.54 1.22 2.66 0 .827-.22 1.513-.66 2.06-.427.547-1 .927-1.72 1.14Zm-5.08-1.16h2.24c.56 0 .987-.12 1.28-.36.307-.253.46-.62.46-1.1 0-.48-.153-.847-.46-1.1-.293-.253-.72-.38-1.28-.38h-2.24v2.94Zm2.52 5.6c.573 0 1.013-.127 1.32-.38.32-.267.48-.647.48-1.14 0-.493-.167-.88-.5-1.16-.32-.28-.767-.42-1.34-.42h-2.48v3.1h2.52Zm10.604-11.28v8.4c0 .84.206 1.487.62 1.94.413.453 1.02.68 1.82.68s1.413-.227 1.84-.68c.426-.453.64-1.1.64-1.94v-8.4h3.42v8.38c0 1.253-.267 2.313-.8 3.18a5.108 5.108 0 0 1-2.16 1.96c-.894.44-1.894.66-3 .66-1.107 0-2.1-.213-2.98-.64a4.94 4.94 0 0 1-2.06-1.96c-.507-.88-.76-1.947-.76-3.2v-8.38h3.42Zm22.781 0-4.86 9.4V25h-3.42v-4.64l-4.86-9.4h3.88l2.72 5.88 2.7-5.88h3.84Z'
            fill='#fff'
        />
        <path
            d='M88.66 10.96V25h-3.42V10.96h3.42ZM103.698 25h-3.42l-5.72-8.66V25h-3.42V10.96h3.42l5.72 8.7v-8.7h3.42V25Z'
            fill='#000'
        />
    </svg>
)

export default Logo
