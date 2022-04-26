<template>
  <v-card
    color="purple"
    flat
    height="100px"
    tile
  >
    <v-toolbar
      extended
      extension-height="50"
    >

      <v-toolbar-title class="black--text">Rock.Paper.Scissor</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn text>
          Sign up
        </v-btn>

        <router-link to="/login"><v-btn text>
          Login
        </v-btn>
        </router-link>

        <v-btn text>
          Support
        </v-btn>
      </div>
    </v-toolbar>
  </v-card>


</template>
