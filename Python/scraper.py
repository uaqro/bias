import sqlalchemy

import pyodbc

class NewsParser:
    
    def __init__(self):
        self.value_to_check = pd.Timestamp(date.today())
    
    def el_espanol(self):
        df_el_espanol = pd.DataFrame([tweet for tweet in get_tweets('elespanolcom', pages=1)])
        df_el_espanol = df_el_espanol[df_el_espanol['time']>self.value_to_check]
        df_el_espanol['Media'] = 'El Español'
        df_el_espanol['link'] = ["".join(re.findall('https://.*', text)) for text in df_el_espanol['text']]
        df_el_espanol['text'] = [(re.findall('.*(?=http)', text))[0] for text in df_el_espanol['text']]
        df_el_espanol['bias'] = 0.005164735345018129
        return df_el_espanol
        
    
    def el_confidencial(self): #OK 
        df_el_confidencial = pd.DataFrame([tweet for tweet in get_tweets('elconfidencial', pages=1)])
            #The above line parses the tweets and creates a dataframe with a row for each tweet
        df_el_confidencial = df_el_confidencial[df_el_confidencial['time']>self.value_to_check]
            #We want to make sure all the news are from today so we need to check the timestamp
        df_el_confidencial['Media'] = 'El Confidencial'
            #We add the media source to de dataframe
        df_el_confidencial['link'] = ["".join(re.findall('http.*', text)) for text in df_el_confidencial['text']]
            #We look for the link in the tweet text
        df_el_confidencial['text'] = [(re.findall('.*(?=http)', text))[0] for text in df_el_confidencial['text']]
            #We isolate the headline in the 'text' column
        df_el_confidencial['bias'] = 0.2634015025959301
            #Here we add a 'bias' column referring to the political bias of the media by the standards given in the article: https://www.acicom.org/las-televisiones-y-el-sesgo-politico-en-la-opinion-publica-fundacion-alternativas/?lang=es 
            #The bias will get a standardized value in function of the score (We're interested in 'how far' right or left each media is situated)
        #The code for each media parser may vary a little but in general they will always follow the same pattern.
        return df_el_confidencial
    
    def la_vanguardia(self):
        df_la_vanguardia = pd.DataFrame([tweet for tweet in get_tweets('LaVanguardia', pages=1)])
        df_la_vanguardia = df_la_vanguardia[df_la_vanguardia['time']>self.value_to_check]
        df_la_vanguardia['Media'] = 'La Vanguardia'
        df_la_vanguardia['link'] = ["".join(re.findall('http.*', text)) for text in df_la_vanguardia['text']]
        df_la_vanguardia['text'] = [(re.findall(r'.*(?=http)', text))[0] if 'http' in text else text for text in df_la_vanguardia['text']]
        df_la_vanguardia['bias'] = -0.40801409225644136
        return df_la_vanguardia
        
    def el_pais(self):
        df_el_pais = pd.DataFrame([tweet for tweet in get_tweets('el_pais', pages=1)])
        df_el_pais = df_el_pais[df_el_pais['time']>value_to_check]
        df_el_pais['Media'] = 'El Pais'
        df_el_pais['link'] = ["".join(re.findall('http.*', text)) for text in df_el_pais['text']]
        df_el_pais['text'] = [(re.findall('.*(?=http)', text))[0] if 'http' in text else text for text in df_el_pais['text']]
        df_el_pais['bias'] = -0.5113087991568057
        return df_el_pais
    
    def el_mundo(self):
        df_el_mundo = pd.DataFrame([tweet for tweet in get_tweets('elmundoes', pages=1)])
        df_el_mundo = df_el_mundo[df_el_mundo['time']>self.value_to_check]
        df_el_mundo['Media'] = 'El Mundo'
        df_el_mundo['link'] = ["".join(re.findall('http.*', text)) for text in df_el_mundo['text']]
        df_el_mundo['text'] = [(re.findall('.*(?=http)', text))[0] if 'http' in text else text for text in df_el_mundo['text']]
        df_el_mundo['bias'] = 0.6249329767472064
        return df_el_mundo
    
    def el_diario_es(self):
        df_el_diario_es = pd.DataFrame([tweet for tweet in get_tweets('eldiarioes', pages=1)])
        df_el_diario_es = df_el_diario_es[df_el_diario_es['time']>self.value_to_check]
        df_el_diario_es['Media'] = 'El Diario'
        df_el_diario_es['link'] = ["".join(re.findall('https://.*', text)) for text in df_el_diario_es['text']]
        df_el_diario_es['text'] = [(re.findall('.*(?=http)', text))[0] if 'http' in text else text for text in df_el_diario_es['text']]
        df_el_diario_es['bias'] = -1.1310770405589945
        return df_el_diario_es
    
    def ok_diario(self):
        df_ok_diario = pd.DataFrame([tweet for tweet in get_tweets('okdiario', pages=1)])
        df_ok_diario = df_ok_diario[df_ok_diario['time']>self.value_to_check]
        df_ok_diario['Media'] = 'Ok Diario'
        df_ok_diario['link'] = ["".join(re.findall('https://.*', text)) for text in df_ok_diario['text']]
        df_ok_diario['text'] = [(re.findall('.*(?=http)', text))[0] if 'http' in text else text for text in df_ok_diario['text']]
        df_ok_diario['bias'] = 2.174353580252678
        return df_ok_diario
    
    def europa_press(self):
    
        df_ep = pd.DataFrame([tweet for tweet in get_tweets('europapress', pages=1)])
        df_ep = df_ep[df_ep['time']>self.value_to_check]
        df_ep['Media'] = 'EuropaPress'
        df_ep['link'] = ["".join(re.findall('https://.*', text)) for text in df_ep['text']]
        df_ep['text'] = [(re.findall('.*(?=http)', text))[0] if 'http' in text else text for text in df_ep['text']]
        df_ep['bias'] = 0.005164735345018129
        return df_ep
    
    def abc(self):
        df_abc = pd.DataFrame([tweet for tweet in get_tweets('abc_es', pages=1)])
        df_abc = df_abc[df_abc['time']>self.value_to_check]
        df_abc['Media'] = 'ABC'
        df_abc['link'] = ["".join(re.findall('https://.*', text)) for text in df_abc['text']]
        df_abc['text'] = [(re.findall('.*(?=http)', text))[0] if 'http' in text else text for text in df_abc['text']]
        df_abc['bias'] = 0.6249329767472064
        
        return df_abc
    def publico(self):
        
        df_elplural = pd.DataFrame([tweet for tweet in get_tweets('publico_es', pages=1)])
        df_elplural = df_elplural[df_elplural['time']>self.value_to_check]
        df_elplural['Media'] = 'Publico'
        df_elplural['link'] = ["".join(re.findall('https://.*', text)) for text in df_elplural['text']]
        df_elplural['text'] = [(re.findall('.*(?=http)', text))[0] if 'http' in text else text for text in df_elplural['text']]
        df_elplural['bias'] = -1.6475505750608184
        
        return df_elplural
    
    def main(self):
                
        result = pd.concat([self.el_confidencial(), self.la_vanguardia(), self.el_pais(), self.abc(), self.europa_press(), self.ok_diario(), self.el_diario_es(), self.publico()], axis=0)
        
        return result

news = NewsParser().main()

engine = sqlalchemy.create_engine("mssql+pyodbc://localhost/test_project")
engine = sqlalchemy.create_engine('mssql+pyodbc://'+user+':'+password+'@'+host+':'+port+'/'+database+'?'\
          +'driver=SQL+Server+Native+Client+11.0')

# Envía la db a mysql:
news.to_sql("test", engine)