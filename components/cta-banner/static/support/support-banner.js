import React from 'react';
import { CtaBanner, CtaBannerBody } from '../../index';
import Buttons from '../../../buttons/index';

const columnData = [
  {
    title: 'Support Open Source',
    message:
      'These libraries are free forever. Your support helps to keep them top notch.',
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2F3a1e30c4-c4c1-4ce8-af06-962c1912853f_support_open_source%402x.png',
    actions: null,
  },
  {
    title: 'Need Developer Support?',
    message: 'Get chat and support from our awesome engineering team.',
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2Fa0259b03-5b79-46da-ab4a-9c64cc50e284_engineering_supoort%402x.png',
    actions: [
      {
        label: 'See Support Plans',
        title:
          'We offer a number of paid support plans to service everyone from individual developers to the largest enterprises',
        icon: null,
        target: '_blanks',
        link: 'https://support.plot.ly/plans/',
        button: {
          classes: 'button button-primary',
        },
      },
    ],
  },
  {
    title: 'Share Online',
    message:
      'Share charts, dashboards, Jupyter notebooks, and presentations online.',
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2F44724c0b-2f05-40c3-8224-8d1705c8db2b_share_online%402x.png',
    actions: null,
  },
];

export default class SupportBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderColumns = columnData => {
      return columnData.map((column, i) => {
        let columnActions = () => {
          if (column.actions) {
            return (
              <div key={i} className="column-actions center">
                {' '}
                <Buttons
                  className="center padding-top"
                  items={column.actions}
                />
              </div>
            );
          } else {
            return null;
          }
        };

        return (
          <div className="column">
            <div className="column-wrapper">
              <div className="column-graphic">
                <div className="column-graphic-wrapper">
                  <img src={column.graphic} alt={column.title} />
                </div>
              </div>
              <div className="column-title">{column.title}</div>
              <div className="column-message">{column.message}</div>
              {columnActions()}
            </div>
          </div>
        );
      });
    };
    return (
      <CtaBanner style={this.props.style}>
        <CtaBannerBody>
          <div className="columns">
            <div className="columns-wrapper">{renderColumns(columnData)}</div>
          </div>
        </CtaBannerBody>
      </CtaBanner>
    );
  }
}
