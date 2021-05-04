import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Calendar,
  Appointment,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Fockink" />
          <Profile>
            {/* <img src={user.avatar_url} alt={user.name} /> */}
            <img
              src="https://avatars1.githubusercontent.com/u/60147880?v=4"
              alt="Leonardo"
            />

            <div>
              <span>Bem vindo, </span>
              {/* <strong>{user.name}</strong> */}
              <strong>Leonardo Muller</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Terça-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars1.githubusercontent.com/u/60147880?v=4"
                alt="Usuario"
              />
              <strong>Leonardo Muller</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://veja.abril.com.br/wp-content/uploads/2021/04/JAIR-BOLSONARO-0902214321.jpg.jpg"
                  alt="Usuario"
                />

                <strong>Jair Messias Bolsonaro</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                10:00
              </span>

              <div>
                <img
                  src="https://static.poder360.com.br/2021/03/lula-fachin-868x590.jpg"
                  alt="Usuario"
                />

                <strong>Luiz Inácio</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                10:00
              </span>

              <div>
                <img
                  src="https://imagens.brasil.elpais.com/resizer/Qh8ou42_hk3oEmuRwfUrkpVXmUA=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SBJ3UW43NBHBLGRMP73V22ZF3I.jpg"
                  alt="Usuario"
                />

                <strong>Dilma</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers=
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
