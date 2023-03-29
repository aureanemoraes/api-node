import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1;

    _read() {
        const i = this.index++;

        setTimeout(() => {
            if ( i < 6 ) {
                this.push(Buffer.from(String(i)));
            } else
                this.push(null);
        }, 1000);
    }
}

fetch('http://localhost:3334', {
    method: 'POST',
    body: new OneToHundredStream(),
    duplex: 'half'
})
.then(res => res.text())
.then(data => console.log(data));