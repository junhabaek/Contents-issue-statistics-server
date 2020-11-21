from wordcloud import WordCloud

class WordcloudGenerator:
    def make_wordcloud(self, df):
        single_str = self._concat_strs_in_df(df)
        return WordCloud(max_font_size=200,
                  background_color='#FFFFFF',
                  width=1200,
                  height=800,
                 max_words=50).generate(single_str)

    def _concat_strs_in_df(self, df):
        target_list = [sentence for sentence in df['text']]
        return ' '.join(target_list)