import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';
import MainHeader from '../../components/ui/MainHeader/MainHeader';
import ServiceInfo from '../../components/ui/ServiceInfo/ServiceInfo';

export interface ServicesPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    sectionData: any;
}

const INIT_STATE: ServicesPageState = {

}

export interface ServicesPageState {

}

export class ServicesPage extends React.Component<ServicesPageProps, ServicesPageState> {

    constructor(props: ServicesPageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    componentDidMount(){
        
    }
    render() {
        const { props, state } = this;
        const cls = this.props.className || "";

        // let titleHtml = { __html: props.sectionData.title }
        
        let serviceData = SERVICE_INFO;

        return (
            <div className={"services-page " + cls}>
                <div className="services-page__wrapper">
                    <div className="services-page__wrapper--header">
                        <MainHeader 
                            title={props.sectionData.title} 
                            subtitle={props.sectionData.subTitle} 
                            copy={props.sectionData.copy} 
                            inverted={false}
                        />
                    </div>
                    <div className="services-page__wrapper--data">
                    {
                        serviceData.map((info, i)=>{
                            return <ServiceInfo 
                                        key={'service-info-'+i}
                                        number={info.number}
                                        title={info.title}
                                        copy={info.copy}
                                />
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

const SERVICE_INFO = [
    {
        key: 0,
        number: "01",
        title: "Branding",
        copy: "Ea sint cuasdsam. Ullam consectetur nostrum voluptatem fugiat et dolor non totam sed. Et quia sit aliquam et. Voluptatibus sit facere aperiam tempore est nam et cupiditate. Necessitatibus nisi dolorem enim sit aut earum et praesentium. Impedit recusandae consequatur beatae deleniti impedit non et. Eos consequuntur alias. Rerum sit est est tenetur soluta."     
    },
    {
        key: 1,
        number: "02",
        title: "Product Design",
        copy: "In aspernatur autem enim maxime mollitia. Debitis rerum alias. Facilis qui est qui impedit. Dolorum fuga provident. Debitis eum non odit facilis ut quibusdam porro ipsa. Optio aut similique vero dolore sunt laudantium et autem quo. Earum eligendi dolorem aut quae modi. Cumque impedit voluptatem molestiae a. Perspiciatis at tempora dicta molestiae iure dolore.        "     
    },
    {
        key: 2,
        number: "03",
        title: "UX Research",
        copy: "Repellat commodi numquam hic odit voluptatem saepe praesentium. Delectus itaque nemo aut ipsam similique et veniam. Assumenda rerum ut ea soluta distinctio beatae consectetur omnis libero. Ratione ipsum sapiente suscipit. Dolorem id doloremque. Nihil cupiditate sed molestiae quia dolorem sit iure doloremque. Rerum ea officia pariatur."     
    },
    {
        key: 3,
        number: "04",
        title: "Frontend Development",
        copy: "Ea sint cuasdsam. Ullam consectetur nostrum voluptatem fugiat et dolor non totam sed. Et quia sit aliquam et. Voluptatibus sit facere aperiam tempore est nam et cupiditate. Necessitatibus nisi dolorem enim sit aut earum et praesentium. Impedit recusandae consequatur beatae deleniti impedit non et. Eos consequuntur alias. Rerum sit est est tenetur soluta."     
    },
    {
        key: 4,
        number: "05",
        title: "E-Commerce",
        copy: "Ea sint cuasdsam. Ullam consectetur nostrum voluptatem fugiat et dolor non totam sed. Et quia sit aliquam et. Voluptatibus sit facere aperiam tempore est nam et cupiditate. Necessitatibus nisi dolorem enim sit aut earum et praesentium. Impedit recusandae consequatur beatae deleniti impedit non et. Eos consequuntur alias. Rerum sit est est tenetur soluta."     
    },
    {
        key: 5,
        number: "06",
        title: "Illustration",
        copy: "Ea sint cuasdsam. Ullam consectetur nostrum voluptatem fugiat et dolor non totam sed. Et quia sit aliquam et. Voluptatibus sit facere aperiam tempore est nam et cupiditate. Necessitatibus nisi dolorem enim sit aut earum et praesentium. Impedit recusandae consequatur beatae deleniti impedit non et. Eos consequuntur alias. Rerum sit est est tenetur soluta."     
    },
]

const mapStateToProps = (state: IStoreState, ownProps): Partial<ServicesPageProps> => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage);
