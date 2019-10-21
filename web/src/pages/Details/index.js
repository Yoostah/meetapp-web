import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function Details(props) {
  const { match } = props;
  const [meetupData, setMeetupData] = useState();

  useEffect(() => {
    async function getMeetupData() {
      const meetupID = decodeURIComponent(match.params.meetup);
      setMeetupData(meetupID);
      /* const [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: selectedOption,
            per_page: 5,
            page: page !== 0 ? page : undefined,
          },
        }),
      ]); */

      /* this.setState({
        repository: repository.data,
        issues: issues.data,
        loading: false,
      }); */
    }

    getMeetupData();
  }, [match.params.meetup]);
  return (
    <Container>
      <strong>Detalhes {meetupData}</strong>
    </Container>
  );
}
