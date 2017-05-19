import React from 'react'
import styles from './browser-wrapper.scss'

export default ({children}) => (
    <div className="browser">
        <style dangerouslySetInnerHTML={{__html: styles}}/>
        <div>
            <div className="browser-wrapper">
                <div className="browser-header">
                    <div className="browser-header-buttons">
                        <div className="circle" />
                        <div className="circle" />
                        <div className="circle" />
                    </div>
                </div>
                <div className="browser-viewport">
                    {children}
                </div>
            </div>
        </div>
    </div>
)