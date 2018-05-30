import React from 'react'
import Picture from 'react-picture-component'

const pantherImage = "Pink_Panther.gif"

export class Header extends React.Component {
    render() {
        return (
            <div> 
                <Picture 
                renderImage={({src, alt }) => (
                    <pantherImage src={"./Pink_Panther.gif"} alt={""} />
                )}
                />
                )

                Today I gonna DO:
            </div> 
             
        );

    }
}