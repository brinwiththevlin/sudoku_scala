package Sukoku

import scala.scalajs.js
import org.scalajs.dom

@main
def LiveChart(): Unit = {
  dom.document.querySelector("#app").innerHTML = """
        <div>
            <h1>Hello Scala.js! and VIte!</h1>
            <p>This is a placeholder for the live chart component.</p>
            <a href="https://vitejs.dev/guide/features.html" target="_blank">Learn more about Vite</a>
        </div>
        """
}
