import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getGameListData, getGenreListData } from '../../actions/rawg-api';
import { clearGameListAction, apiErrorAction } from '../../actions/index';
import CategoryList from './CategoryList';
import GameItem from '../landing_page/game_list/game_item';
import LoadingSpinner from '../shared/loading_spinner';
import '../../scss/browse/browse.scss';

class BrowsePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genreList: [],
      gameList: [],
    };
  }

  async componentDidMount() {
    const genreResponse = await getGenreListData();
    const gameResponse = await getGameListData(
      'genres',
      this.props.match.params.category,
      'rating'
    );
    if (genreResponse && gameResponse) {
      this.setState({
        genreList: genreResponse.map((res) => ({
          id: res.id,
          name: res.name,
          slug: res.slug,
        })),
        gameList: gameResponse,
      });
    } else {
      this.props.apiErrorAction();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      getGameListData(
        'genres',
        this.props.match.params.category,
        'rating'
      ).then((result) =>
        this.setState({
          gameList: result,
        })
      );
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
      <Container className="w-100 py-5 mt-5" id="browse-container">
        <Row>
          <Col xs={{ order: 2 }} lg={{ span: 10, order: 1 }}>
            <div className="pb-2">
              <p>
                {`Browsing `}
                <span className="browsing-title">
                  {this.props.location.paramName
                    ? this.props.location.paramName
                    : this.props.match.params.category.replace(/-/g, ' ')}
                </span>
                {` Games`}
              </p>
            </div>
            <div
              className="d-flex flex-wrap align-content-center"
              id="game-container"
            >
              {galleryData}
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            lg={{ span: 2, order: 2 }}
            className="d-none d-lg-block"
          >
            <CategoryList genreList={this.state.genreList} />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.redux.single,
  };
}

export default connect(mapStateToProps, {
  clearGameListAction,
  apiErrorAction,
})(BrowsePage);
