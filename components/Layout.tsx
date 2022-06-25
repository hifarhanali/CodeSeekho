import type { ReactElement } from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout