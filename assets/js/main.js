$(document).ready(function () {

    let Abg = {
        a: "ა",
        b: "ბ",
        g: "გ",
        d: "დ",
        e: "ე",
        v: "ვ",
        z: "ზ",
        T: "თ",
        i: "ი",
        k: "კ",
        l: "ლ",
        m: "მ",
        n: "ნ",
        o: "ო",
        p: "პ",
        J: "ჟ",
        r: "რ",
        s: "ს",
        t: "ტ",
        u: "უ",
        f: "ფ",
        q: "ქ",
        R: "ღ",
        y: "ყ",
        S: "შ",
        C: "ჩ",
        c: "ც",
        Z: "ძ",
        w: "წ",
        W: "ჭ",
        x: "ხ",
        j: "ჯ",
        h: "ჰ",
    }

    let sh = {
        sh: "S",
        ch: "C",
        ts: "c",
        zh: "J",
        dz: "Z",
        gh: "R"
    }

    $('.la').on('input', function () {

        $('.copy').text('კოპირება');

        let la = $(this).val();
        let ge = $('.ge');

        let re;

        for (let elem in sh) {
            re = new RegExp(`${elem}`, 'g');
            la = la.replace(re, sh[elem]);
        }

        let las = la.split('');
        let ges = [];

        las.forEach(function (element) {
            Abg[element] ? ges += Abg[element] : ges += element;
        })

        ge.text(ges);
    })

    function copyToClipboard(text) {

        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }

    $('.copy').click(function () {
        let clipboardText = "";
        clipboardText = $('.ge').val();
        copyToClipboard(clipboardText);
        $(this).text('დაკოპირებულია');

        $('.ge').css('background-color', 'rgba(147, 197, 75, 0.2)');

        setTimeout(function () {
            $('.ge').css('background-color', 'rgba(0, 0, 0, 0.05)');
        }, 1200);
    });

})