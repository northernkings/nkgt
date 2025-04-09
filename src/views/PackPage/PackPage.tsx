import './PackPage.css';
import { Separator } from 'src/components/Separator';
import LogoHolidayInn from '../../assets/images/logo-holiday-inn.svg?react';
import LogoMews from '../../assets/images/logo-mews.svg?react';
import LogoRamada from '../../assets/images/logo-ramada.svg?react';
import { EditorialSection } from '../../components/EditorialSection';

export const PackPage = () => {
  return (
    <EditorialSection
      title="Tournament Pack"
      variants={['single']}
      titleAs="h1"
    >
      <p>
        <strong>Updated: 9th April 2025</strong>
      </p>

      <nav
        aria-label="Tournament Pack Navigation"
        className="c-page-nav"
      >
        <ul>
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#requirements">Requirements</a>
          </li>
          <li>
            <a href="#rules">Game Rules</a>
          </li>
          <li>
            <a href="#scoring">Scoring</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#appendices">Appendices</a>
          </li>
        </ul>
      </nav>

      <section
        className="l-flow"
        id="overview"
      >
        <h2>Overview</h2>
        <p>
          The Northern Kings invite you to join them up in t'north for dice rolling and social
          antics.
        </p>
        <ul>
          <li>21st and 22nd June 2025</li>
          <li>5 x 2300 point games of KoW v3.5</li>
          <li>Location: Ossett War Memorial Community Centre, Wakefield</li>
          <li>Hot lunch included on both days</li>
          <li>Evening food in the bar</li>
          <li>Army lists must be submitted in advance</li>
          <li>Tournament re-roll once per game</li>
          <li>
            Command dice <strong>will not</strong> be in-play.
          </li>
          <li>
            The optional Withdraw rule <strong>will not</strong> be in-play.
          </li>
        </ul>

        <h3>Tournament Organisers</h3>
        <p>
          The Tournament Organisers (TO's) for this event are Northern Kings members; Elliot, Nick,
          Paul and Tom.
        </p>
        <p>
          We rotate TO's for each event so our team members get a chance to play if they wish. If a
          member is playing, they are fully paid up and, as such, they're treated as a player and
          not a TO on the day (No bias… in fact, we'll usually be biased against them!).
        </p>
        <p>
          The TO's will make a call on any rules or situations that two players are unable to
          resolve amongst themselves. The TO's decision at the table is final and stands even if
          found to be wrong at a later date.
        </p>

        <h3>Tickets</h3>
        <p>Tickets are priced at £60.00 and can be purchased via the Northern Kings website:</p>
        <p>
          <a
            href="https://gt.thenorthernkings.com/register/"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://gt.thenorthernkings.com/register/
          </a>
        </p>
        <p>
          Refunds will be available up until the 7th June 2025 by emailing the team at:{' '}
          <a href="mailto:northernkings.kow@gmail.com">northernkings.kow@gmail.com</a>
        </p>
        <p>
          After this date, we will endeavour to find a replacement to take your place but we cannot
          guarantee it.
        </p>
      </section>

      <Separator />

      <section
        className="l-flow"
        id="schedule"
      >
        <h2>Schedule</h2>
        <p>
          A relaxed atmosphere with less rushing between rounds is what we aim to provide our
          attendees, but we may bring rounds forward if running ahead of schedule.
        </p>
        <p>
          We will endeavour to close the event by 4.00pm on Sunday, allowing people to begin their
          journeys home.
        </p>

        <h3>Day One</h3>
        <table
          aria-label="Day One Schedule"
          className="b-table b-table--zebra"
        >
          <thead>
            <tr>
              <th>Activity</th>
              <th className="b-table__cell--center">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Registration</td>
              <td className="b-table__cell--center">09:00</td>
            </tr>
            <tr>
              <td>Briefing</td>
              <td className="b-table__cell--center">09:30</td>
            </tr>
            <tr>
              <td>Game One</td>
              <td className="b-table__cell--center">09:45</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td className="b-table__cell--center">12:00</td>
            </tr>
            <tr>
              <td>Game Two</td>
              <td className="b-table__cell--center">13:00</td>
            </tr>
            <tr>
              <td>Break</td>
              <td className="b-table__cell--center">15:15</td>
            </tr>
            <tr>
              <td>Game Three</td>
              <td className="b-table__cell--center">15:30</td>
            </tr>
            <tr>
              <td>Evening Social</td>
              <td className="b-table__cell--center">19:00</td>
            </tr>
          </tbody>
        </table>

        <h3>Day Two</h3>
        <table
          aria-label="Day Two Schedule"
          className="b-table b-table--zebra"
        >
          <thead>
            <tr>
              <th>Activity</th>
              <th className="b-table__cell--center">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Game Four</td>
              <td className="b-table__cell--center">09:45</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td className="b-table__cell--center">12:00</td>
            </tr>
            <tr>
              <td>Game Five</td>
              <td className="b-table__cell--center">13:00</td>
            </tr>
            <tr>
              <td>Awards & Close</td>
              <td className="b-table__cell--center">15:15</td>
            </tr>
          </tbody>
        </table>
        <p>The schedule may be adjusted on the day.</p>
      </section>

      <Separator />

      <section
        className="l-flow"
        id="requirements"
      >
        <h2>What You Will Need</h2>
        <ul>
          <li>Your 2300 point Kings of War army</li>
          <li>At least 3 printed copies of your army list including unit stats</li>
          <li>
            A copy of the Kings of War 3rd Edition Rulebook (Big Red Book) and any supplements that
            you are using rules from (physical or digital)
          </li>
          <li>Dice, tape measure, arc template</li>
          <li>A chess clock (physical or app)</li>
        </ul>
      </section>

      <Separator />

      <section
        className="l-flow"
        id="rules"
      >
        <h2>Game Rules</h2>
        <ul>
          <li>Games will be played using Kings of War 3.5 Edition (Big Red Book).</li>
          <li>
            The optional Withdraw rule <strong>WILL NOT</strong> be in-play.
          </li>
          <li>
            Command dice <strong>WILL NOT</strong> be in-play.
          </li>
          <li>
            Allies <strong>CAN</strong> be used.
          </li>
        </ul>

        <h3>Army Composition</h3>
        <p>
          Each player will need to bring a 2300-point army, following the army composition rules
          within the core rulebook.
        </p>

        <h3>List Submission</h3>
        <p>
          Please submit army lists by midnight on the 7th June 2025 to:{' '}
          <a href="mailto:northernkings.kow@gmail.com">northernkings.kow@gmail.com</a>
        </p>
        <p>Lists must be exported from the Mantic companion tool in PDF format.</p>
        <p>
          All players who submit lists on time will receive a +5 tournament points bonus to their
          overall score.
        </p>

        <h3>Printed Lists</h3>
        <p>
          You <strong>MUST</strong> bring printed copies of your army list to the event for your
          opponent. We recommend printing multiple copies as backups in case of any issues.
        </p>
        <p>
          If you're using proxy models, clearly identify them in your list using the Mantic
          Companion's unit description field. For example: "Butchers with Brew of Strength - Unit
          with wounded elf on the base."
        </p>
        <p>
          Players who present their 3x printed lists at registration will receive a +10 tournament
          points bonus (NOTE: this is in addition to the +5 tournament points bonus for submitting
          your list on time).
        </p>

        <h3>Tournament Re-Roll</h3>
        <p>
          You may re-roll one dice per game. This must be one of your own dice rolled, it cannot be
          a roll-off and it cannot be for a turn 7. This re-roll ignores, and is ignored by, the
          "Can't re-roll a re-roll rule."
        </p>

        <h3>Prize Donation</h3>
        <p>
          As we like to try make sure everyone leaves with a prize, we'll be running a raffle at the
          end of the event.
        </p>
        <p>
          To gain an additional +5 tournament points, each player can bring a prize donation with
          them to the event. It should be gaming related, but there in no minimum value (just think
          of something you might like to win). Think of it as a chance to rid yourself of some of
          that pile of plastic shame you've been hoarding.
        </p>
        <p>
          This is not compulsory, it only applies to the overall tournament score (not your
          KoWMasters score), but it's a fun way to try make sure everyone leaves with a prize (and
          for you to bump your overall score up a bit).
        </p>
      </section>

      <Separator />

      <section
        className="l-flow"
        id="scoring"
      >
        <h2>Event Scoring</h2>
        <p>
          Players will be ranked first by their Tournament Points (TPs) and then their Kill Points
          will be used to decide ties.
        </p>
        <p>
          The Northern Kings GT will be using hobby scores towards the top 3 Overall awards. These
          will be an additional 20 TPs that players can earn on top of their tournament points.
        </p>
        <p>
          Scores submitted to KoWMasters rankings and for the Best General award will not include
          the hobby points.
        </p>
        <p>
          The breakdown of TPs available for the Tournament Score (used for KoWMasters rankings and
          Best General) and Overall Score (used for our top 3 overall awards) are as follows:
        </p>

        <table
          aria-label="Tournament Points Breakdown"
          className="b-table b-table--zebra"
        >
          <thead>
            <tr>
              <th>Category</th>
              <th className="b-table__cell--center">Max TPs</th>
              <th className="b-table__cell--center">Tournament Score</th>
              <th className="b-table__cell--center">Overall Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Game Scores</td>
              <td className="b-table__cell--center">125</td>
              <td className="b-table__cell--center">✓</td>
              <td className="b-table__cell--center">✓</td>
            </tr>
            <tr>
              <td>List Submission</td>
              <td className="b-table__cell--center">5</td>
              <td className="b-table__cell--center">✓</td>
              <td className="b-table__cell--center">✓</td>
            </tr>
            <tr>
              <td>Printed Lists</td>
              <td className="b-table__cell--center">10</td>
              <td className="b-table__cell--center">✓</td>
              <td className="b-table__cell--center">✓</td>
            </tr>
            <tr>
              <td>Painted Army</td>
              <td className="b-table__cell--center">10</td>
              <td className="b-table__cell--center">✓</td>
              <td className="b-table__cell--center">✓</td>
            </tr>
            <tr>
              <td>Hobby Scores</td>
              <td className="b-table__cell--center">20</td>
              <td className="b-table__cell--center" />
              <td className="b-table__cell--center">✓</td>
            </tr>
            <tr>
              <td>Prize Donation</td>
              <td className="b-table__cell--center">5</td>
              <td className="b-table__cell--center" />
              <td className="b-table__cell--center">✓</td>
            </tr>
          </tbody>
        </table>

        <h3>Game Scores</h3>
        <p>
          Players will earn up to 25 tournament points and 2300 kill points per game. We'll be using
          the Northern Kings scoring system, as detailed in Appendix I.
        </p>

        <h3>Painted Army</h3>
        <p>
          Players who use a painted army will earn 10 tournament points. To be considered painted,
          all units must be:
        </p>
        <ul>
          <li>Assembled (barring breakages)</li>
          <li>Painted with at least 3 colours minimum*</li>
          <li>Based with some sort of basing material</li>
          <li>
            Have at least 50%+1 of the correct model count, or an equivalent volume if using proxies
            of a different model type (e.g. a monster representing a cavalry unit)
          </li>
          <li>
            Any non-wargaming toys must be converted and/or painted to fit in with the wargaming
            aesthetic
          </li>
        </ul>
        <p>
          <strong>NOTE:</strong> The above requirement is separate to the hobby scoring and is a
          simple yes/no question of whether an army is painted or not. This is therefore included in
          the tournament score and for the scores submitted for KoWMasters rankings.
        </p>
        <p>
          Please contact us before the event if you have any questions about whether your army is
          considered painted at{' '}
          <a href="mailto:northernkings.kow@gmail.com">northernkings.kow@gmail.com</a>.
        </p>
        <p>
          * There can be an exception for units that cannot achieve 3 colours for thematic reasons,
          such as ethereal units. It is highly recommended that you contact us before the event if
          concerned about eligibility.
        </p>

        <h3>Hobby Scores</h3>
        <p>
          Players earn additional Tournament Points for the quality of their painting and modelling,
          up to a maximum of 20 points.
        </p>
        <p>
          There are up to 10 points available as a self-marked checkbox sheet and 10 hobby judge's
          points.
        </p>
        <p>Please see Appendix III for the full details.</p>

        <h3>Bonuses</h3>
        <p>There are a number of bonuses available to players:</p>
        <p>
          Players who submit their list on time, as detailed on the previous page, will receive +5
          tournament points (applied to both the tournament and overall scores).
        </p>
        <p>
          Additionally, players who present their 3x printed lists at registration will receive a
          +10 tournament points bonus (applied to both the tournament and overall scores).
        </p>
        <p>
          Players who bring a prize donation to the event will receive an additional +5 tournament
          points (applied to the overall score only).
        </p>
      </section>

      <Separator />

      <section
        className="l-flow"
        id="awards"
      >
        <h2>Awards</h2>
        <p>The awards available are as follows:</p>
        <ul>
          <li>1st, 2nd and 3rd Overall</li>
          <li>Best General</li>
          <li>Best Army (Judge's Choice)</li>
          <li>Best Army (Player's Choice)</li>
          <li>Most Sporting</li>
          <li>The Wounded Spoon (Last Place)</li>
          <li>10x Hobby Kudos Pin Badges (Judge's Choice)</li>
        </ul>
        <p>Depending on the number of attendees, additional awards may be added.</p>

        <h3>Best Army</h3>
        <p>
          Each attendee will be able to cast a vote for their favourite army. The army with the most
          votes will receive the Player's Choice Best Army award.
        </p>
        <p>The judges will choose another army for the Judge's Best Army award.</p>

        <h3>Most Sporting</h3>
        <p>
          At the end of the event, you will be asked to list your favourite and 2nd favourite
          opponents. The player with the most votes will win the Most Sporting award. Favourite
          votes are worth twice as much as 2nd favourite votes. In the event of a tie, the player
          with the lowest gaming score will win the award, since they were obviously so sporting as
          to let their opponents win!
        </p>

        <h3>Prize Support Raffle</h3>
        <p>
          Any prize support that isn't assigned to specific awards will be raffled off at random at
          the beginning of the awards ceremony.
        </p>
      </section>

      <Separator />

      <section
        className="l-flow"
        id="location"
      >
        <h2>Location</h2>
        <p>The event will be held at the Ossett War Memorial Community Centre, Wakefield.</p>
        <address>
          Ossett War Memorial
          <br />
          Community Centre
          <br />
          Prospect Road
          <br />
          Ossett
          <br />
          WF5 8AN
        </address>
        <p>
          We have exclusive use of the Community Centre for all day and evening Saturday and Sunday.
        </p>

        <h3>Accommodation</h3>
        <p>
          There are multiple boutique hotels within walking distance but also more standard hotels
          only a three to four minute drive from the venue.
        </p>
        <p>Below are links to a few suggestions:</p>
        <ul className="c-accommodation__list u-list-logos">
          <li>
            <a href="https://www.ihg.com/holidayinn/hotels/gb/en/find-hotels/select-roomrate?qDest=Queen%27s%20Dr,%20United%20Kingdom&qPt=CASH&qCiD=20&qCoD=21&qCiMy=42023&qCoMy=42023&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qAAR=6CBARC&qSlH=XWDWY&qAkamaiCC=GB&srb_u=1&qSrt=sDD&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va.ii.sp.nd.sx.we.lx&qWch=0&qSmP=1&qRad=30&qRdU=mi&setPMCookies=false&qpMn=0&qLoSe=false">
              <div className="c-accommodation__logo c-accommodation__logo--holiday-inn">
                <LogoHolidayInn />
                <span className="u-sr-only">Holiday Inn</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.wyndhamhotels.com/en-uk/ramada/yorkshire-united-kingdom/ramada-wakefield/rooms-rates?brand_id=RA&checkInDate=5/20/2023&checkOutDate=5/21/2023&useWRPoints=false&children=0&adults=1&rooms=1&loc=ChIJ6XnyiLU1eUgRYIVRMAP6oMs&sessionId=1639404597">
              <div className="c-accommodation__logo c-accommodation__logo--ramada">
                <LogoRamada />
                <span className="u-sr-only">Ramada</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://mews-hotel.co.uk/">
              <div className="c-accommodation__logo c-accommodation__logo--mews">
                <LogoMews />
                <span className="u-sr-only">The Mews Hotel</span>
              </div>
            </a>
          </li>
        </ul>

        <h3>Food and Drink</h3>
        <p>Lunch is provided on both days.</p>
        <p>
          The Community Centre has an onsite bar, which will be stocked with a general selection of
          soft and alcoholic drinks. The bar is cash only.
        </p>
        <p>
          We will be sending out a pre-event survey to take menu choices and any dietary
          requirements.
        </p>

        <h3>Evening Social</h3>
        <p>
          We'll be gathering ~7.00pm on the Saturday evening (enough time to nip back to your
          accommodation) in the bar at the Community Centre for drinks and munches. Feel free to
          bring board games too!
        </p>
      </section>

      <Separator />

      <section
        className="l-flow"
        id="sportsmanship"
      >
        <h2>A Note on Sportsmanship</h2>
        <p>
          We're here to have fun. Don't be a dick. If someone's being a dick, speak to the TO. The
          TO can deduct points if they think it's necessary and in extreme circumstances, eject a
          dick from the tournament.
        </p>
      </section>

      <Separator />

      <section
        className="l-flow"
        id="round-timing"
      >
        <h2>Round Timing</h2>
        <p>
          Chess clocks will be used throughout the event to ensure that it runs to time and that
          round time is split fairly between the two players. Each player has 60 minutes to complete
          their half of the game and there is an additional 15 minutes built into the round time for
          meeting & greeting, toilet breaks, rules queries etc.
        </p>
        <p>Please see Appendix II for our rules on the use of chess clocks.</p>
      </section>

      <Separator />

      <section
        className="l-flow"
        id="appendices"
      >
        <h2>Appendices</h2>

        <h3 id="appendix1">Appendix I – Northern Kings Scoring System</h3>
        <p>
          The amount of Tournament Points you have scored in your game is calculated using three
          criteria:
        </p>
        <ul>
          <li>Win/Loss/Draw</li>
          <li>Scenario Points</li>
          <li>Kill Bonus</li>
        </ul>

        <h4>Win, Loss, Draw</h4>
        <table
          aria-label="Win/Loss/Draw Points"
          className="b-table b-table--zebra b-table--center"
        >
          <thead>
            <tr>
              <th>Outcome</th>
              <th>TP's</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Win</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Draw</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Loss</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>

        <h4>Scenario Points</h4>
        <p>
          Calculate the number of scenario points you scored at the end of the game. It will explain
          how to do this for each scenario on your score sheet, e.g.
        </p>
        <p>
          For each Scenario Point you earned, add a Tournament Point to your total to a maximum of
          +5 Tournament Points.
        </p>

        <h4>Kill Bonus</h4>
        <p>
          Calculate the total value of your opponent's army that was routed during the game (Kill
          Points). Compare this total to the table below.
        </p>
        <table
          aria-label="Kill Points Bonus"
          className="b-table b-table--center b-table--zebra"
        >
          <thead>
            <tr>
              <th>Kill Points</th>
              <th>Bonus TP's</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>500-899</td>
              <td>+1</td>
            </tr>
            <tr>
              <td>900-1299</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>1300-1699</td>
              <td>+3</td>
            </tr>
            <tr>
              <td>1700-2099</td>
              <td>+4</td>
            </tr>
            <tr>
              <td>2100+</td>
              <td>+5</td>
            </tr>
          </tbody>
        </table>
        <p>
          The total cumulative Kill Points achieved throughout the event is used as a tie breaker.
        </p>

        <h4>Scoring Example</h4>
        <p>To illustrate the scoring system, below is a hypothetical example:</p>
        <p>
          Nick won the game (15 TP's). He controlled 4 objective markers at the end of the game (+4
          TP's) and routed 1350 points of his opponent's army (+3 TP's).
        </p>
        <p>This gives him a total score for the game of 22 Tournament Points.</p>

        <h3 id="appendix2">Appendix II – Chess Clock Rules</h3>
        <p>
          Chess Clocks must be running during deployment, any scout moves and throughout the player
          turns. They can be paused for any action involving a roll-off, rules disputes and toilet
          breaks.
        </p>
        <p>
          Clocks cannot be paused for normal in-game checks, such as LOS, unless there is genuine
          disagreement between the two players. A "genuine disagreement" is one that requires
          pulling out the rulebook or for the TO to rule on the situation.
        </p>
        <p>
          If a player feels that their opponent is pausing the clock unnecessarily or taking an
          excessive amount of time off-clock then they must let the TO know as soon as possible.
        </p>
        <p>
          If a player times out then it is immediate dice-down for them. The player may take no
          further actions during any remaining turns. Note that turn 7 must always been rolled for,
          even if one player has timed out.
        </p>
        <p>
          At round end it is dice down immediately for both players and the game ends. If the
          players can see that the round is going to end before they finish their game then they
          should endeavour to finish the game so each player has had an equal number of turns, e.g.
          both players should have had 5 turns each as opposed to one player having 5 and the other
          6.
        </p>

        <h3 id="appendix3">Appendix III – Hobby Scoring</h3>
        <p>
          Northern Kings GT will be using Hobby Scores to supplement tournaments points towards the
          Overall awards. These are in addition to the 10 points for the basic Painted Army criteria
          of "Is the army painted?".
        </p>
        <p>There are 20 Hobby Points available.</p>
        <p>
          Of these, 10 are available for the self-scoring checklist below (provided on your score
          sheet for the weekend) and 10 are hobby judge awarded.
        </p>
        <p>
          For the Judge portion of the hobby scoring, each of the TO's will apply up to 10 points
          for the army based on the overall aesthetic and the quality of the hobby on display.
        </p>
        <p>The average of the Judges scores for a given army will be added as Hobby Points.</p>

        <p>Some examples of what we'll look for, but not limited to, are:</p>
        <ul>
          <li>Use an effective and visually appealing colour scheme.</li>
          <li>Consistently neat painting.</li>
          <li>Have a theme (e.g. Moonlit Undead) reflected in the modelling and painting.</li>
          <li>Have a display board for your army.</li>
          <li>Have built units into dynamic dioramas, taking advantage of the multi-basing.</li>
          <li>Custom modelled and themed 'extras' such as objective markers.</li>
          <li>
            Use advanced techniques such as object-source-lighting (OSL) or on-metal-metals (NMM).
          </li>
        </ul>

        <p>
          Please leave your armies on display with your scoresheets or a name badge during lunch on
          both days for the hobby judges.
        </p>

        <h4>Self-Scoring Checklist</h4>
        <table
          aria-label="Self-Scoring Hobby Checklist"
          className="b-table b-table--zebra"
        >
          <thead>
            <tr>
              <th>Criteria</th>
              <th className="b-table__cell--center">Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Models in the army have been painted in a consistent, cohesive colour scheme.*
              </td>
              <td className="b-table__cell--center">2</td>
            </tr>
            <tr>
              <td>
                Bases in the army have been completed in a consistent, cohesive basing scheme.*
              </td>
              <td className="b-table__cell--center">2</td>
            </tr>
            <tr>
              <td>
                Examples of advanced basing in the army such as cork, tufts and water effects.
              </td>
              <td className="b-table__cell--center">1</td>
            </tr>
            <tr>
              <td>Examples of basic shading in the army such as washes and/or drybrushing.</td>
              <td className="b-table__cell--center">1</td>
            </tr>
            <tr>
              <td>
                Examples of advanced shading in the army such as blending and edge highlighting.
              </td>
              <td className="b-table__cell--center">1</td>
            </tr>
            <tr>
              <td>
                Examples of minor conversions in the army such as head swaps and weapon swaps.
              </td>
              <td className="b-table__cell--center">1</td>
            </tr>
            <tr>
              <td>
                Examples of advanced conversions in the army such as scratch building or sculpting
              </td>
              <td className="b-table__cell--center">1</td>
            </tr>
            <tr>
              <td>Examples of advanced painting techniques in the army such as freehand or OSL.</td>
              <td className="b-table__cell--center">1</td>
            </tr>
            <tr>
              <td>
                <strong>Total Self-Scoring</strong>
              </td>
              <td className="b-table__cell--center">
                <strong>10</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          * Exception allowed for allied contingents to be painted and/or based in a different
          scheme to the main force. However, allied contingents must be consistent and cohesive
          themselves. Your main force must be painted and based consistently, and your allied force
          must be painted and based consistently.
        </p>
      </section>
    </EditorialSection>
  );
};

export default PackPage;
