import React from 'react'
import './brand.css';
import { Google,Atlassian,Shopify,Slack,Dropbox } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
            <div>
                    <img src={ Google } alt='google' />
            </div>
            <div>
                    <img src={ Slack } alt='slack' />
            </div>
            <div>
                    <img src={ Atlassian } alt='atlassian' />
            </div>
            <div>
                    <img src={ Dropbox } alt='dropbox' />
            </div>
            <div>
                    <img src={ Shopify } alt='shopify' />
            </div>
    </div>
  )
}

export default Brand