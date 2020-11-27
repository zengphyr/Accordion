import React, { MouseEventHandler } from 'react';

type AccordionProps = {
    title?: string;
    children?: string;
}

type AccordionState = {
    isOpen?: boolean;
}

export class Accordion extends React.Component<AccordionProps, AccordionState> {
    constructor(props: AccordionProps) {
        super(props);

        //default state is false
        this.state = { isOpen : false };
        this.handleExpand = this.handleExpand.bind(this);
    }

    handleExpand() {
        //const newState = this.state.isOpen === true ? false : true;
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return(
            <div className="box">
                <div className="title-box" onClick={this.handleExpand}>
                    <span className="title">{this.props.title}</span>
                    <span className="icon"><i className={`fa fa-play-circle${!this.state.isOpen ? ' down' : ''}`}></i></span>
                    <div className="clearfix"></div>
                </div>
                {this.state.isOpen && <div className="content">{this.props.children}</div>}
            </div>
        )
    }
}