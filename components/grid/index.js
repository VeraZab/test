import React from 'react';
import styles from './grid.styles.scss';

export class GridItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let classes = 'grid-item';

        if (this.props.className) {
            classes += ' ' + this.props.className;
        }

        let columnWidth = '33%';

        let gridItemStyles = {

        };

        if ('columns' in this.props) {
            columnWidth = 100 /  parseInt(this.props.columns);
            columnWidth = columnWidth + '%';

            // console.log(columnWidth);

            if(this.props.style){
                gridItemStyles = this.props.style;
                gridItemStyles.maxWidth = columnWidth;
            } else {
                gridItemStyles = {
                    maxWidth: columnWidth,
                    width: columnWidth
                }
            }



        }
        return (
            <div className={classes} style={gridItemStyles}>
                <div className="grid-item-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        let classes = 'grid';

        if('align-end' in this.props){
            classes += ' layout-align-end';
        }
        if('align-start' in this.props){
            classes += ' layout-align-start';
        }
        if('align-center' in this.props){
            classes += ' layout-align-center';
        }

        if (this.props.className) {
            classes += ' ' + this.props.className;
        }

        if (this.props.className) {
            classes += ' ' + this.props.className;
        }


        return (
            <div className={classes}>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className="grid-wrapper">
                    { React.Children.map(this.props.children, child => React.cloneElement(child, {columns: this.props.columns, style: this.props.itemStyle}))}
                </div>
            </div>
        );
    }
}
