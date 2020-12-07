/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getGameListData, getGenreListData } from '../../actions/rawg-api';
import { clearGameListAction } from '../../actions/index';
import CategoryList from './CategoryList';
import GameItem from '../landing_page/game_list/game_item';
import LoadingSpinner from '../shared/loading_spinner';
import '../../scss/browse/browse.scss';

class BrowsePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.match.path,
      genreList: [],
      gameList: [],
    };

    console.log('props', props, this.state.path);
    console.log('category', this.props.match.params.category);
  }

  async componentDidMount() {
    const genreResponse = await getGenreListData();
    this.setState({
      // genreList: genreResponse.map((res) => ({ id: res.id, name: res.name })),
      gameList: await getGameListData(
        'genres',
        this.props.match.params.category,
        'rating'
      ),
      path: this.props.location.pathname,
    });
    console.log('games list param', this.props.match.params.category, 'gameslist', this.state.gameList);
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log('updated', prevProps, prevState);
    if (prevProps.location.pathname !== this.props.location.pathname) {
      console.log(prevProps.match.params.category, this.props.match.params.category);
      const list = await getGameListData(
        'genres',
        this.props.match.params.category,
        'rating'
      );
      console.log('updated', list);
    }
  }

  componentWillUnmount() {
    this.props.clearGameListAction();
  }

  render() {
    if (!this.state.gameList.length) {
      return <LoadingSpinner />;
    }

    const galleryData = this.state.gameList.map((game) => (
      <GameItem key={game.id} game={game} />
    ));

    return (
      <Container className="w-100 py-5" id="browse-container">
        <Row>
          <Col xs={{ order: 2 }} lg={{ span: 10, order: 1 }}>
            <div className="pb-2">
              <p>Browsing <span className="browsing-title">{this.props.match.params.category}</span> Games</p>
            </div>
            <div className="d-flex flex-wrap align-content-center">
              {galleryData}
            </div>
          </Col>
          <Col xs={{ span: 12, order: 1 }} lg={{ span: 2, order: 2 }}>
            <CategoryList
              genreList={this.state.genreList}
              selectCategory={this.selectCategory}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.list.single,
  };
}

export default connect(mapStateToProps, {
  clearGameListAction
})(BrowsePage);
