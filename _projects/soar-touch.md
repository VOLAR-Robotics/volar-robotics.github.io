---
layout: default
title: SOAR-Touch — Volar Robotics
permalink: /projects/soar-touch/
---

<section class="project-hero">
  <div class="container hero-inner">
    <div class="hero-copy">
      <p class="eyebrow">Research · Chapter 01</p>
      <h1>SOAR-Touch</h1>
      <p class="lead">Soft Optical Aerial Robot — Touch</p>
      <div class="hero-visual-mobile" aria-hidden="true">
        <img
          src="{{ '/assets/img/platform-minithex@800.png' | relative_url }}"
          width="800" height="435"
          alt=""
          decoding="async">
      </div>
      <p class="intro">
        The perception–control foundations of tactile aerial physical interaction:
        soft optical tactile feedback into an energy-aware contact controller,
        carried from bench characterization through software- and hardware-in-the-loop
        validation to flight on a fully-actuated multirotor.
      </p>
      <div class="pill-row">
        <span class="pill">Field-validated · miniThex</span>
        <span class="pill">2025–2026</span>
        <span class="pill">Open source</span>
      </div>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <img
        src="{{ '/assets/img/platform-minithex.png' | relative_url }}"
        srcset="{{ '/assets/img/platform-minithex@800.png' | relative_url }} 800w,
                {{ '/assets/img/platform-minithex.png' | relative_url }} 1600w"
        sizes="(max-width: 980px) 90vw, 560px"
        width="1600" height="869"
        alt=""
        decoding="async">
    </div>
  </div>
</section>

<section class="project-section">
  <div class="container">
    <header class="section-head reveal">
      <p class="eyebrow">Work</p>
      <h2>What was built.</h2>
    </header>

    <article class="work-block reveal">
      <h3>Part I · Soft optical tactile sensing</h3>
      <p>A complete tactile sensing pipeline that turns a silicone-membrane camera
      sensor into a quantitative contact-state observer. A purpose-built characterization
      rig on a UR10 manipulator at Sapienza DIAG produced the ground-truth dataset for a
      heteroscedastic deep regressor — itself trained against a physics-informed loss
      that anchors lateral force estimates to torque consistency. An Extended Kalman
      Filter fuses the regressor's per-sample uncertainty with the carrier's pose to
      produce stable estimates of contact patch geometry and incipient slip. The full
      pipeline was first validated in closed-loop force regulation on the UR10, then
      deployed in flight on the UTwente miniThex hexarotor with both flat and
      tilted sensor-mount configurations.</p>
    </article>

    <article class="work-block reveal">
      <h3>Part II · SOT-aided aerial interaction</h3>
      <p>An energy-aware aerial interaction stack built on top of the tactile pipeline.
      A geometric SE(3) controller drives the multirotor's pose; a dual-channel
      admittance layer (compliant in translation, stiff in rotation) shapes the contact
      wrench; an on-line manifold-aware reference generator solves a quadratic program
      on SO(3) at every cycle, exploiting the friction cone and surface reaction force
      to minimise rotor power while maintaining the hybrid force–motion reference. The
      full stack was validated in Simulink with stochastic wind and contact-model
      uncertainty, then in hardware-in-the-loop on a torque-controlled Franka Research
      3 arm, then in free flight on the miniThex against both vertical and upward-tilted
      surfaces.</p>
    </article>
  </div>
</section>

<section class="project-section alt">
  <div class="container">
    <header class="section-head reveal">
      <p class="eyebrow">Team</p>
      <h2>The people behind SOAR-Touch.</h2>
    </header>

    <div class="role-grid">
      <div class="role-block reveal">
        <h4>Researchers</h4>
        <ul>
          <li><strong>Simone Orelli</strong> · Volar Robotics — flight control &amp; physical interaction</li>
          <li><strong>Antonio Rapuano</strong> · Volar Robotics — tactile perception &amp; AI</li>
        </ul>
      </div>

      <div class="role-block reveal">
        <h4>Project Manager</h4>
        <ul>
          <li><strong>Alessandro De Luca</strong> · Sapienza University of Rome · DIAG</li>
        </ul>
      </div>

      <div class="role-block reveal">
        <h4>Supervisors</h4>
        <ul>
          <li><strong>Antonio Franchi</strong> · University of Twente · RaM</li>
          <li><strong>Barbara Bazzana</strong> · University of Twente · RaM</li>
          <li><strong>Andrea Cristofaro</strong> · Sapienza University of Rome · DIAG</li>
          <li><strong>Marilena Vendittelli</strong> · Sapienza University of Rome · DIAG</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="project-section">
  <div class="container">
    <header class="section-head reveal">
      <p class="eyebrow">Timeline</p>
      <h2>Milestones &amp; deliverables.</h2>
    </header>

    <ol class="ifp-list">
      <li class="reveal">
        <p class="when">2025 · Phase I</p>
        <h3>Tactile perception pipeline</h3>
        <p>Characterization campaign at Sapienza DIAG, deep regressor training, EKF
        fusion, closed-loop validation on a UR10 manipulator. Software released as
        <code>soar-touch-sot</code>.</p>
      </li>
      <li class="reveal">
        <p class="when">31 Oct 2025 · Milestone</p>
        <h3>M2 — Interim Report from Technical Hosting Institution</h3>
        <p>Mid-project assessment submitted to the euROBIN consortium, covering the
        perception pipeline and the initial flight-validation campaign.</p>
      </li>
      <li class="reveal">
        <p class="when">Late 2025 — early 2026 · Phase II.a</p>
        <h3>Aerial control architecture</h3>
        <p>Geometric SE(3) controller, dual-channel admittance, manifold-aware energy-aware
        reference generator. Validated in Simulink under stochastic wind, then in
        hardware-in-the-loop on a Franka Research 3 arm.</p>
      </li>
      <li class="reveal">
        <p class="when">31 Jan 2026 · Deliverable</p>
        <h3>MS3 TPI1 — Robust Control Architecture, Tested in Simulation in the Presence of Disturbance</h3>
        <p>Deliverable 2 submitted to the euROBIN consortium. Closed-loop simulation
        evidence for the energy-aware contact controller under wind and contact-model
        uncertainty.</p>
      </li>
      <li class="reveal">
        <p class="when">2026 · Phase II.b</p>
        <h3>In-flight validation on miniThex</h3>
        <p>Energy-aware tactile interaction demonstrated in free flight on vertical and
        upward-tilted surfaces at UTwente. Software released as
        <code>soar-touch-phynt</code>.</p>
      </li>
    </ol>
  </div>
</section>

<section class="project-section alt">
  <div class="container">
    <header class="section-head reveal">
      <p class="eyebrow">Media</p>
      <h2>Demonstration gallery.</h2>
      <p>Chronological tour of the experimental campaigns. Recordings are slated
      for release after the corresponding peer-reviewed publications.</p>
    </header>

    <div class="video-carousel reveal">
      <div class="carousel-track">
        <article class="video-tile">
          <div class="thumb" aria-hidden="true"><span class="play">▶</span></div>
          <div class="cap">
            <p class="phase-label">Exp. 01 · Tactile HIL</p>
            <h4>UR10 closed-loop force regulation</h4>
            <p>The DCNN+EKF tactile pipeline running on a fixed-base manipulator. First
            proof that perception is real-time and stable under operator-induced wall
            motion.</p>
          </div>
        </article>

        <article class="video-tile">
          <div class="thumb" aria-hidden="true"><span class="play">▶</span></div>
          <div class="cap">
            <p class="phase-label">Exp. 02 · Flight, flat mount</p>
            <h4>Aerial perception on miniThex</h4>
            <p>The hexarotor engages a vertical wall with a 0° sensor mount. The on-board
            EKF reconstructs surface pose in flight and aligns the sensor face to the
            wall normal.</p>
          </div>
        </article>

        <article class="video-tile">
          <div class="thumb" aria-hidden="true"><span class="play">▶</span></div>
          <div class="cap">
            <p class="phase-label">Exp. 03 · Flight, tilted mount</p>
            <h4>Pose–attitude decoupling under offset</h4>
            <p>Same protocol with a 10° tilted sensor mount, exercising non-trivial
            attitude–pose decoupling on the fully-actuated platform.</p>
          </div>
        </article>

        <article class="video-tile">
          <div class="thumb" aria-hidden="true"><span class="play">▶</span></div>
          <div class="cap">
            <p class="phase-label">Exp. 04 · Software-in-the-loop</p>
            <h4>Energy-aware contact under wind</h4>
            <p>Simulink validation of the full perception–control stack under stochastic
            wind. The reference generator converges on an attitude–force pair that
            exploits the friction cone.</p>
          </div>
        </article>

        <article class="video-tile">
          <div class="thumb" aria-hidden="true"><span class="play">▶</span></div>
          <div class="cap">
            <p class="phase-label">Exp. 05 · Franka HIL, gravity</p>
            <h4>Full stack on a torque-controlled arm</h4>
            <p>The 7-DoF Franka Research 3 runs the complete SOAR-Touch stack. The EKF
            tracks operator-imposed wall re-orientation; the optimizer issues stable
            attitude commands.</p>
          </div>
        </article>

        <article class="video-tile">
          <div class="thumb" aria-hidden="true"><span class="play">▶</span></div>
          <div class="cap">
            <p class="phase-label">Exp. 06 · Franka HIL, wind</p>
            <h4>Combined gravity + wind disturbance</h4>
            <p>Same Franka protocol with simulated wind injected on the dynamics.
            Stress-tests the perception–control cascade under combined disturbance
            loads.</p>
          </div>
        </article>

        <article class="video-tile">
          <div class="thumb" aria-hidden="true"><span class="play">▶</span></div>
          <div class="cap">
            <p class="phase-label">Exp. 07 · Flight, vertical wall</p>
            <h4>Energy-aware contact in free flight</h4>
            <p>miniThex regulates contact on a vertical surface with the full energy-aware
            optimizer engaged. Friction is exploited symmetrically to reduce thrust
            during sustained contact.</p>
          </div>
        </article>

        <article class="video-tile">
          <div class="thumb" aria-hidden="true"><span class="play">▶</span></div>
          <div class="cap">
            <p class="phase-label">Exp. 08 · Flight, tilted surface</p>
            <h4>Leveraging the wall reaction</h4>
            <p>Same flight protocol against an upward-tilted surface. The wall reaction
            force is leveraged to partially support the platform's weight.</p>
          </div>
        </article>
      </div><!-- /.carousel-track -->

      <div class="carousel-controls">
        <button class="carousel-prev" aria-label="Previous page">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="carousel-dots" role="tablist" aria-label="Pages"></div>
        <button class="carousel-next" aria-label="Next page">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div><!-- /.carousel-controls -->
    </div><!-- /.video-carousel -->
  </div>
</section>

<section class="project-section">
  <div class="container">
    <header class="section-head funding-head reveal">
      <div>
        <p class="eyebrow">Funding &amp; acknowledgement</p>
        <h2>euROBIN.</h2>
      </div>
      <a href="https://www.eurobin-project.eu/" target="_blank" rel="noopener noreferrer" class="funding-logo-link">
        <img src="{{ '/assets/img/eurobin.png' | relative_url }}" alt="euROBIN — The European Excellence Network on AI-Powered Robotics" class="logo-eurobin">
      </a>
    </header>
    <p class="reveal">SOAR-Touch was carried out within
      <a href="https://www.eurobin-project.eu/" target="_blank" rel="noopener noreferrer">euROBIN</a>,
      the European Network of Excellence in Robotics, co-funded by the European Union.
      The flight campaigns were hosted by the Robotics and Mechatronics group at the
      University of Twente.</p>

    <p style="margin-top: 2rem;">
      <a href="{{ '/#research' | relative_url }}">← Back to Research</a>
    </p>
  </div>
</section>
