import React from 'react'

function Links(link)
{
    const currentUrl = "https://" + link.url
    return (
        <div className="" key={link.id}>
                            {console.log(link)}
                            <a href={currentUrl} target="_blank" rel="noopener"
                            className="underline">{link.title}</a>
                        </div>
    )
}

export default Links
