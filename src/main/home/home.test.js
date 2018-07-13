import { HomeComponent, mapDispatchToProps } from './home.component';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';

let component = null;
const initialState = {};
let createSpy = jasmine.createSpy;
const mockStore = configureStore([thunk]);
let store;


beforeEach(() => {
    store = mockStore(initialState)
    component = new HomeComponent();
    component.props = {
        search: mapDispatchToProps(store.dispatch).search
    }
});

describe('Home Component Test :: -> ', function () {
    it('Should create component ** ->', function () {
        expect(component).toBeTruthy();
    });

    it('1) componentMount should call search ** ->', function () {
        const searchSpy = spyOn(component.props, 'search');
        component.componentDidMount();
        expect(searchSpy).toHaveBeenCalled();
    });

    it('2) search should dispatch fetchContacts action ** ->', function () {
        const storeSpy = spyOn(store, 'dispatch');
        component.props.search();
        store.dispatch();
        expect(storeSpy).toHaveBeenCalled();
    });
});