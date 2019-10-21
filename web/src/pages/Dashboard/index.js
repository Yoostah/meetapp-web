import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState();
  // const [dataAtual, setDate] = useState(new Date());

  useEffect(() => {
    async function loadMyMeetups() {
      const response = await api.get('meetup');

      const formattedMeetup = response.data.map(meetup => ({
        ...meetup,
        formattedData: format(
          parseISO(meetup.schedule),
          "d 'de' MMMM ', às' HH:mm'h'",
          {
            locale: pt,
          }
        ),
      }));

      setMeetups(formattedMeetup);
    }
    loadMyMeetups();
  }, [setMeetups]);
  return (
    <Container>
      <header>
        <strong>MEUS MEETUPS</strong>
        <button type="button">
          <div>
            <MdChevronRight size={20} color="#FFF" />
            Novo Meetup
          </div>
        </button>
      </header>
      <ul>
        {meetups ? (
          meetups.map(meetup => (
            <Link
              to={`/details/${encodeURIComponent(meetup.id)}`}
              key={meetup.id}
            >
              <Meetup>
                <strong>{meetup.title}</strong>
                <div>
                  <span>{meetup.formattedData}</span>
                  <MdChevronRight size={20} color="#FFF" />
                </div>
              </Meetup>
            </Link>
          ))
        ) : (
          <span>Você não possui Meetups cadastradas.</span>
        )}
      </ul>
    </Container>
  );
}
