import React from 'react';
import Viewer, { RenderToolbar, Slot } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import file from '../../data/resume.pdf'
// import { Worker } from '@phuocng/react-pdf-viewer';




const Resume = () => {
 
    const layout = (
        isSidebarOpened: boolean,
        container: Slot,
        main: Slot,
        toolbar: RenderToolbar,
        sidebar: Slot,
    ): React.ReactElement => {
        return (
            <div
                {...container.attrs}
                style={Object.assign({}, {
                    border: '1px solid rgba(0, 0, 0, .3)',
                    height: '100%',
                    overflow: 'hidden',
                    width: '100%',
                }, container.attrs.style)}
            >
                {container.children}
                <div
                    {...main.attrs}
                    style={Object.assign({}, {
                        height: '100%',
                        overflow: 'scroll',
                    }, main.attrs.style)}
                >
                    {main.children}
                </div>
            </div>
        );
    };

    return ( 
    <section className="resume-head">
        <div className="resume-wrapper">
            <Viewer id='resume-viewer' fileUrl={process.env.PUBLIC_URL + '/myresume.pdf'} layout={layout} />
        </div>
    </section>
     );
}
 
export default Resume;