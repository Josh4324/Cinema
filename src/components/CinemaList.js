import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import Cinema2 from './Cinema2';


class CinemaList extends Component {

    render() {
        const {history, logState, data, user} = this.props
        console.log(data)
        let datalist = []
        if (data !== null) {
        Object.keys(data).map( key => {
            let newdata = data[key]
            return Object.keys(newdata).map(key => {
                return datalist.push(newdata[key])
            })
        })

        function compare(a, b) {
            
            const time1 = a.postt
            const time2 = b.postt
          
            let comparison = 0;
            if (time1 > time2) {
              comparison = 1;
            } else if (time1 < time2) {
              comparison = -1;
            }
            return comparison * -1;
          }
          
          datalist.sort(compare);
    }
        return (
            <div>
        
            <div className="contain py-3">
                <div className="container1">
                        <div className="row">
                            {
                                datalist.map((data) => {
                                    return <Cinema2 key={data.key}  newdata={data} history={history} logState={logState} />
                                })
                            }
                        </div>
                </div>
            </div>

          

            </div>
        );
    }
}

export default CinemaList;