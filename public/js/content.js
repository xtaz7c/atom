document.addEventListener("DOMContentLoaded", () => {
   const tabela = document.querySelector(".protable");

   if (!tabela) {
      console.error("Elemento .protable não encontrado.");
      return;
   }

   /*
    |--------------------------------------------------------------------------
    | MAGNETS
    |--------------------------------------------------------------------------
    */

   const magnets = [
      /* Moon Beak - Convite */
      "magnet:?xt=urn:btih:216a8d7d3339497dc3129894a4c04496cb3c8e27&dn=Moon%20Beak%20-%20Convite&xl=627&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.qu.ax%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.peerfect.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ilibr.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.gmi.gd%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filemail.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.farted.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ducks.party%3A1984%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.corpscorp.online%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.bittor.pw%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.auctor.tv%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=udp%3A%2F%2Ftr4ck3r.duckdns.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftorrentclub.online%3A54123%2Fannounce&tr=udp%3A%2F%2Ftorrentclub.online%3A1984%2Fannounce&tr=udp%3A%2F%2Ft.overflow.biz%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fbittorrent-tracker.e-n-c-r-y-p-t.net%3A1337%2Fannounce&tr=https%3A%2F%2Ftracker.yemekyedim.com%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.pmman.tech%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.bt4g.com%3A443%2Fannounce&tr=https%3A%2F%2Ftr.zukizuki.org%3A443%2Fannounce&tr=https%3A%2F%2Fht.therarbg.to%3A443%2Fannounce&tr=http%3A%2F%2Ftracker810.xyz%3A11450%2Fannounce&tr=http%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.sbsub.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.renfei.net%3A8080%2Fannounce&tr=http%3A%2F%2Ftracker.qu.ax%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.privateseedbox.xyz%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.mywaifu.best%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.dler.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce&tr=http%3A%2F%2Ftracker.bt-hash.com%3A80%2Fannounce&tr=http%3A%2F%2Ft.overflow.biz%3A6969%2Fannounce&tr=http%3A%2F%2Fshubt.net%3A2710%2Fannounce&tr=http%3A%2F%2Fhome.yxgz.club%3A6969%2Fannounce&tr=http%3A%2F%2Fbt.poletracker.org%3A2710%2Fannounce&tr=http%3A%2F%2Fbittorrent-tracker.e-n-c-r-y-p-t.net%3A1337%2Fannounce&tr=http%3A%2F%2F1337.abcvg.info%3A80%2Fannounce&tr=udp%3A%2F%2Fyuptracker-eu.gaijinent.com%3A27022%2Fannounce&tr=udp%3A%2F%2Ftracker.wildkat.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tryhackx.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.teambelgium.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.playground.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.nexusstream.eu%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ddunlimited.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.aruku.ovh%3A8081%2Fannounce&tr=udp%3A%2F%2Ftracker.0x7c0.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftr.btube3.com%3A2010%2Fannounce&tr=udp%3A%2F%2Fretracker01-msk-virt.corbina.net%3A80%2Fannounce&tr=udp%3A%2F%2Frekcart.duckdns.org%3A15480%2Fannounce&tr=udp%3A%2F%2Fopen.ftorrent.com%3A443%2Fannounce&tr=udp%3A%2F%2Fopen.demonoid.ch%3A6969%2Fannounce&tr=udp%3A%2F%2Fns575949.ip-51-222-82.net%3A6969%2Fannounce&tr=udp%3A%2F%2Fmartin-gebhardt.eu%3A25%2Fannounce&tr=udp%3A%2F%2Fmail.segso.net%3A6969%2Fannounce&tr=udp%3A%2F%2Fleet-tracker.moe%3A1337%2Fannounce&tr=udp%3A%2F%2Fipv4announce.sktorrent.eu%3A6969%2Fannounce&tr=udp%3A%2F%2Fevan.im%3A6969%2Fannounce&tr=udp%3A%2F%2Fedgev.duckdns.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fadmin.52ywp.com%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.zhuqiy.com%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.nekomi.cn%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.linvk.com%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.leechshield.link%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.gcrenwp.top%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.7471.top%3A443%2Fannounce&tr=https%3A%2F%2Ftr.nyacat.pw%3A443%2Fannounce&tr=https%3A%2F%2Ft.213891.xyz%3A443%2Fannounce&tr=https%3A%2F%2Fpybittrack.retiolus.net%3A443%2Fannounce&tr=https%3A%2F%2Fopen.ftorrent.com%3A443%2Fannounce&tr=https%3A%2F%2F004430.xyz%3A443%2Fannounce&tr=http%3A%2F%2Fwww.torrentsnipe.info%3A2701%2Fannounce&tr=http%3A%2F%2Ftracker.zhuqiy.com%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.xiaoduola.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.waaa.moe%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.nexusstream.eu%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.ipv6tracker.org%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.dhitechnical.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftr.nyacat.pw%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.hificode.in%3A6969%2Fannounce&tr=http%3A%2F%2Fipv4announce.sktorrent.eu%3A6969%2Fannounce&tr=http%3A%2F%2Faboutbeautifulgallopinghorsesinthegreenpasture.online%3A80%2Fannounce&tr=http%3A%2F%2F004430.xyz%3A80%2Fannounce",
      /* Cães de Caça */
      "magnet:?xt=urn:btih:e7f7fab6f5b179f2e51c98ba465dbe1e98ae2626&dn=C%C3%A3es%20de%20Ca%C3%A7a%20-%20S01%26S02%20-%201080p%20Dublado&xl=30237024326&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.kicks-ass.net%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tricitytorrents.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.pomf.se%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=http%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.skyts.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ex.ua%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.blackunicorn.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2F91.218.230.81%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A2710%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=http%3A%2F%2Ftracker.tricitytorrents.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.ex.ua%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.ex.ua%2Fannounce&tr=http%3A%2F%2Fmgtracker.org%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2F91.218.230.81%3A6969%2Fannounce&tr=http%3A%2F%2Fpow7.com%2Fannounce&tr=http%3A%2F%2Ftracker.dutchtracking.com%3A80%2Fannounce&tr=http%3A%2F%2Fretracker.krs-ix.ru%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.dutchtracking.nl%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.kicks-ass.net%3A80%2Fannounce&tr=http%3A%2F%2Fwww.wareztorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.glotorrents.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftorrentsmd.com%3A8080%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.glotorrents.com%3A6969%2Fannounce",
      /* All of us are Dead */
      "magnet:?xt=urn:btih:b905983cd8b9192240ee9b16dee83cdb41cd0856&dn=All%20of%20Us%20Are%20Dead%20-%20S01%20%282022%29%20720p%20Dublado&xl=11591233955&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.kicks-ass.net%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tricitytorrents.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.pomf.se%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=http%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.skyts.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ex.ua%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.blackunicorn.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2F91.218.230.81%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A2710%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=http%3A%2F%2Ftracker.tricitytorrents.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.ex.ua%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.ex.ua%2Fannounce&tr=http%3A%2F%2Fmgtracker.org%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2F91.218.230.81%3A6969%2Fannounce&tr=http%3A%2F%2Fpow7.com%2Fannounce&tr=http%3A%2F%2Ftracker.dutchtracking.com%3A80%2Fannounce&tr=http%3A%2F%2Fretracker.krs-ix.ru%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.dutchtracking.nl%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.kicks-ass.net%3A80%2Fannounce&tr=http%3A%2F%2Fwww.wareztorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.glotorrents.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftorrentsmd.com%3A8080%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.glotorrents.com%3A6969%2Fannounce",
      /* De olhos bem fechados*/
      "magnet:?xt=urn:btih:8456477093fa4a74ef7eee112e45fcc0f0e0f217&dn=De%20Olhos%20Bem%20Fechado%20%281999%29%201080p%20DUAL&xl=3334295235&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.kicks-ass.net%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tricitytorrents.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.pomf.se%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=http%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.skyts.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ex.ua%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.blackunicorn.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2F91.218.230.81%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A2710%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=http%3A%2F%2Ftracker.tricitytorrents.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.ex.ua%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.ex.ua%2Fannounce&tr=http%3A%2F%2Fmgtracker.org%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2F91.218.230.81%3A6969%2Fannounce&tr=http%3A%2F%2Fpow7.com%2Fannounce&tr=http%3A%2F%2Ftracker.dutchtracking.com%3A80%2Fannounce&tr=http%3A%2F%2Fretracker.krs-ix.ru%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.dutchtracking.nl%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.kicks-ass.net%3A80%2Fannounce&tr=http%3A%2F%2Fwww.wareztorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.glotorrents.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftorrentsmd.com%3A8080%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.glotorrents.com%3A6969%2Fannounce",
   ];

   /*
    |--------------------------------------------------------------------------
    | CRIAR LINHAS
    |--------------------------------------------------------------------------
    */

   magnets.forEach((magnet) => {
      criarLinha(magnet);
   });

   /*
    |--------------------------------------------------------------------------
    | CRIAR UMA LINHA DA TABELA
    |--------------------------------------------------------------------------
    */

   function criarLinha(magnet) {
      const dados = analisarMagnet(magnet);

      const linha = document.createElement("div");

      linha.classList.add("prottr");

      linha.innerHTML = `
            <span class="protd nome">
                ${escaparHTML(dados.nome)}
            </span>

            <span class="protd qualidade">
                ${dados.qualidade}
            </span>

            <span class="protd semeadores">
                ${dados.semeadores}
            </span>

            <span class="protd magnet">
                <button class="btn-magnet" type="button">
                    <ion-icon name="link" class="magnet-icon"></ion-icon>
                    Magnet
                </button>
            </span>
        `;

      tabela.appendChild(linha);

      /*
       <span class="protd tamanho">
                ${dados.tamanho}
            </span>
      */

      /*  
        |--------------------------------------------------------------------------
        | BOTÃO COPIAR
        |--------------------------------------------------------------------------
        */

      const botao = linha.querySelector(".btn-magnet");

      botao.addEventListener("click", () => {
         copiarMagnet(magnet, botao);
      });
   }

   /*
    |--------------------------------------------------------------------------
    | ANALISAR MAGNET
    |--------------------------------------------------------------------------
    */

   function analisarMagnet(magnet) {
      try {
         const query = magnet.split("?")[1];

         if (!query) {
            throw new Error("Magnet inválido.");
         }

         const params = new URLSearchParams(query);

         /*
            | Nome
            */

         const nome = params.get("dn") || "Desconhecido";

         /*
            | Trackers
            */

         const trackers = params.getAll("tr");

         /*
            | Qualidade
            */

         const qualidade = detectarQualidade(nome);

         /*
            | Tamanho
            |
            | Magnet normalmente não possui o tamanho.
            */

         const tamanho = "N/A";

         /*
            | Seeders
            |
            | Não é possível descobrir apenas pelo Magnet.
            */

         const semeadores = "N/A";

         return {
            nome,
            qualidade,
            tamanho,
            semeadores,
            trackers,
         };
      } catch (erro) {
         console.error("Erro ao analisar magnet:", erro);

         return {
            nome: "Magnet inválido",
            qualidade: "N/A",
            tamanho: "N/A",
            semeadores: "N/A",
            trackers: [],
         };
      }
   }

   /*
    |--------------------------------------------------------------------------
    | DETECTAR QUALIDADE
    |--------------------------------------------------------------------------
    */

   function detectarQualidade(nome) {
      const texto = nome.toLowerCase();

      const qualidades = [
         "8k",
         "4320p",
         "4k",
         "2160p",
         "1440p",
         "1080p",
         "720p",
         "576p",
         "480p",
         "360p",
      ];

      for (const qualidade of qualidades) {
         if (texto.includes(qualidade)) {
            return qualidade.toUpperCase();
         }
      }

      return "N/A";
   }

   /*
    |--------------------------------------------------------------------------
    | COPIAR MAGNET
    |--------------------------------------------------------------------------
    */

   async function copiarMagnet(magnet, botao) {
      try {
         await navigator.clipboard.writeText(magnet);

         const conteudoOriginal = botao.innerHTML;

         botao.innerHTML = "Copiado!";

         botao.classList.add("copiado");

         setTimeout(() => {
            botao.innerHTML = conteudoOriginal;

            botao.classList.remove("copiado");
         }, 1500);
      } catch (erro) {
         console.error("Erro ao copiar Magnet:", erro);

         /*
            | Fallback para navegadores que não permitem
            | navigator.clipboard.
            */

         copiarFallback(magnet, botao);
      }
   }

   /*
    |--------------------------------------------------------------------------
    | FALLBACK DE CÓPIA
    |--------------------------------------------------------------------------
    */

   function copiarFallback(magnet, botao) {
      const textarea = document.createElement("textarea");

      textarea.value = magnet;

      textarea.style.position = "fixed";
      textarea.style.opacity = "0";

      document.body.appendChild(textarea);

      textarea.select();

      try {
         document.execCommand("copy");

         const conteudoOriginal = botao.innerHTML;

         botao.innerHTML = "Copiado!";

         setTimeout(() => {
            botao.innerHTML = conteudoOriginal;
         }, 1500);
      } catch (erro) {
         console.error("Não foi possível copiar o Magnet.", erro);
      }

      textarea.remove();
   }

   function escaparHTML(texto) {
      const elemento = document.createElement("div");

      elemento.textContent = texto;

      return elemento.innerHTML;
   }

   
});
