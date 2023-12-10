<?php

namespace App\View\Components;

use Illuminate\View\Component;

class ProcRecursive extends Component
{

    public $message;
    public $key;
    public $value;
    public $data;
    public $htmlContents;
    public $htmlLines;

    public function __construct($data)
    {
        $this->data = $data;
        $this->htmlLines = [];
    }

    public function render()
    {
        $this->key = 'キーです';
        $this->value = '値です';
        $this->htmlContents = '
        <br/>
        <div style="font-size:32px">テスト</div>
        ';

        foreach($this->data as $key=>$val){
            $ret = $this->makeHtml($key, $val);
            if ($ret != null) {
                $this->htmlLines[] =  $ret;
            }
        }

        return view('components.proc-recursive');
    }

    private function makeHtml($key, $val){

        if (is_array($val)) {
            $lines = '';
            foreach($val as $vk=>$vv) {
                $line = $this->makeHtml($vk, $vv);
                if ($line != null) {
                    $lines =  $lines . $line;
                }
            }
            return $lines;
        } else {
            return 
            '<div style="display:flex;">'. 
                '<div style="margin-right:6px;">'. $key . '：</div>' . 
                '<div>'. $val . '</div>' .
            '</div>';
    
        }
        
    }


}
