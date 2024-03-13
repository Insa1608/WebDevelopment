<template>
    <v-app id="employee">
        <v-main>
            <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="12" md="4">
                        <v-form @submit.prevent="savePost" ref="postData" lazy-validation enctype="multipart/form-data" autocomplete="off">
                        <v-title>
                            <span class="headline">Posts</span>
                        </v-title>
                        <v-text>
                            <v-container grid-list-md>
                                 <v-layout wrap>
                                <v-flex xs12 sm12 md12>
                                    <v-text-field label="Name*"  v-model="postData.name" color="#2C3A47"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md12>
                                    <v-text-field label="Description" v-model="postData.description" color="#2C3A47"></v-text-field>
                                </v-flex>
                                </v-layout>
                            </v-container>
                        </v-text>
                        <v-actions>
                            <v-spacer></v-spacer>
                        <v-btn color="light-green darken-4" dark type="submit" outlined small>
                            {{saveDialog}}
                        </v-btn>
                        </v-actions>
                        </v-form>

                    </v-col>
                </v-row>
            </v-container>

        </v-main>
    </v-app>
</template>