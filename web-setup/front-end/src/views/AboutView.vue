<template>
  <div class="about">
    <div class="info">
      <p>
        In the evolution of the Covid-19 virus, a need for public acknowledgement of
        its rapid changes has become essential (43). While there are many resources
        available for everyone to learn about the pandemic, many are often misleading
        or too technical for the general public to accurately comprehend (46, 47). To
        reduce the risk of mistrust and misunderstanding between the scientific
        community and the public (44), data visuals have proven to be the most
        efficient way to present information (45).
      </p>
      <p>
        The Covid-19 pandemic’s biggest menace is the virus’ adaptable and
        fast-changing nature to evolve into a new variant. With the massive quantity
        of data collected, unlike previous pandemics, advancements in data analysis
        and medicine have allowed us to meaningfully quantify and identify the notable
        change of Covid-19 and its variants.  Over time, tracking the variant
        transmission has become especially important to understanding the virus’
        spread and course. Because of this, variants are now classified as either
        Variants of Concern (VoC) or Variants of Interest (VoI). VoC include variants
        such as Alpha, Delta, and Omicron and tend to be more virulent than VoI
        (2, 3). The unprecedented spike of cases around the end of 2021 was due to a
        displacement of the Delta variant by the Omicron variant (48). In this study,
        we focus on the visualization of the transition from the Alpha wave to the
        Delta wave and the subsequent rapid surge of the Omicron variant.</p>
        <p>There are several existing models that present Covid-19 cases per capita of
        those infected with the virus (4, 9, 11, 13, 15). Significantly, measuring
        Covid-19 cases per capita allows models to compare different geographical
        areas to one another even if they vary in population. This is an important
        metric to consider when educating the public on the spread of Covid-19 because
        of the different decisions the government and public make that can lead one
        geographical area to not be as significantly impacted by the virus as another.
        Consequently, a visualization that shows the variants of concern per capita
        that is understandable by the public can be an important tool in aiding public concern.
      </p>
      <p>
        While many teams have recognized the importance of good visualization, the
        current frameworks are limited in their scope. Multiple universities have
        collaborated to create maps that display risk areas or new case rates, but
        they remain narrow in metrics and fail to take variants into account (42).
        Using data collected by the European Center for Disease Prevention and
        Control, we have developed an interactive web API with increased
        functionality and the ability to display the Alpha, Delta, and Omicron waves
        using a bivariate choropleth heatmap.
      </p>
    </div>
    <div class="foot">
      <p>https://github.com/bryn-m/Covid_Evolution</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
}
.info {
  justify-content: center;
  width: 60%;
}
</style>
