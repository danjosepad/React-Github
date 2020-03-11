import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AOS from 'aos';
import api from '../../services/api';
import 'aos/dist/aos.css';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, Select, Footer } from './styles';

export default class Repository extends Component {
  constructor() {
    super();
    this.state = {
      repository: {},
      issues: [],
      loading: true,
      filter: 'open',
      page: 1,
      endPaginate: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleFilter = async e => {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    this.setState({ filter: e.target.value, endPaginate: false });

    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: e.target.value,
        per_page: 5,
      },
    });

    this.setState({ issues: issues.data });
  };

  handlePaginate = async () => {
    const { page, filter, issues } = this.state;
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const { data } = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filter,
        per_page: 5,
        page: page + 1,
      },
    });

    if (data.length === 0) {
      this.setState({ endPaginate: true });
    }
    this.setState({
      page: page + 1,
      issues: [...issues, ...data],
    });
  };

  render() {
    AOS.init({ once: true });

    const { repository, issues, loading, filter, endPaginate } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <Select value={filter} onChange={this.handleFilter}>
          <option value="all">Todas</option>
          <option value="open">Abertas</option>
          <option value="closed">Fechadas</option>
        </Select>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>

        <Footer>
          <button type="button" onClick={this.handlePaginate} />
          {endPaginate && (
            <span data-aos="fade-up">
              Você chegou ao fim da lista de issues
            </span>
          )}
        </Footer>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
